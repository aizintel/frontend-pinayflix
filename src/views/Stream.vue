<script setup lang="ts">
import { ref, onMounted, computed, watch, onUnmounted } from 'vue';
import Header from '../components/Header.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack, AlertCircle } from 'lucide-vue-next';
import RecommendedCard from '../components/cards/RecommendedCard.vue'
import { streamServices } from '../services/stream.service';

import { useRoute } from 'vue-router'

const route = useRoute()
const streamService = streamServices();

let videoSource = ref('')
let videoAuthor = ref('')
let videoTitle = ref('')

// Initialize video details from route query parameters
const updateVideoDetails = () => {
  videoSource.value = route.query.video as string ?? '';
  videoAuthor.value = route.query.author as string ?? '';
  videoTitle.value = route.query.title as string ?? '';
};

// Call updateVideoDetails initially
updateVideoDetails();

watch(
  () => route.fullPath,
  () => {
    updateVideoDetails();
  },
  { immediate: true }
);


const videoError = ref(false);
const errorMessage = ref('');
const videoRef = ref<HTMLVideoElement | null>(null);
const videoContainer = ref<HTMLDivElement | null>(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);
const isFullscreen = ref(false);
const showControls = ref(true);
const controlsTimeout = ref<number | null>(null);
const isLoading = ref(true);


const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const formattedCurrentTime = computed(() => formatTime(currentTime.value));
const formattedDuration = computed(() => formatTime(duration.value));
const progressPercentage = computed(() => (duration.value ? (currentTime.value / duration.value) * 100 : 0));


const togglePlay = () => {
  if (!videoRef.value || videoError.value) return;
  
  if (isPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play().catch(err => {
      console.error('Error playing video:', err);
      videoError.value = true;
      errorMessage.value = 'Failed to play video. Please try again later.';
    });
  }
  isPlaying.value = !isPlaying.value;
  showControlsTemporarily();
};

const toggleMute = () => {
  if (!videoRef.value) return;
  
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
  showControlsTemporarily();
};

const changeVolume = (e: Event) => {
  if (!videoRef.value) return;
  
  const target = e.target as HTMLInputElement;
  const newVolume = parseFloat(target.value);
  videoRef.value.volume = newVolume;
  volume.value = newVolume;
  isMuted.value = newVolume === 0;
  showControlsTemporarily();
};

const seekVideo = (e: Event) => {
  if (!videoRef.value) return;
  
  const target = e.target as HTMLInputElement;
  const seekTime = (parseFloat(target.value) / 100) * duration.value;
  videoRef.value.currentTime = seekTime;
  currentTime.value = seekTime;
  showControlsTemporarily();
};

const toggleFullscreen = () => {
  if (!videoContainer.value) return;
  
  if (!document.fullscreenElement) {
    videoContainer.value.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
  showControlsTemporarily();
};

const skipForward = () => {
  if (!videoRef.value) return;
  
  videoRef.value.currentTime += 10;
  showControlsTemporarily();
};

const skipBackward = () => {
  if (!videoRef.value) return;
  
  videoRef.value.currentTime -= 10; 
  showControlsTemporarily();
};

const updateProgress = () => {
  if (!videoRef.value) return;
  
  currentTime.value = videoRef.value.currentTime;
};

const loadedMetadata = () => {
  if (!videoRef.value) return;
  
  duration.value = videoRef.value.duration;
  isLoading.value = false;
};

const handleVideoError = (e: Event) => {
  videoError.value = true;
  isLoading.value = false;
  const video = e.target as HTMLVideoElement;
  
  switch (video.error?.code) {
    case 1:
      errorMessage.value = 'Video playback was aborted';
      break;
    case 2:
      errorMessage.value = 'Network error occurred while loading the video';
      break;
    case 3:
      errorMessage.value = 'Video decoding failed';
      break;
    case 4:
      errorMessage.value = 'Video format not supported';
      break;
    default:
      errorMessage.value = 'An unknown error occurred';
  }
  
  console.error('Video error:', video.error);
};

const showControlsTemporarily = () => {
  showControls.value = true;
  
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
  }
  
  controlsTimeout.value = setTimeout(() => {
    if (isPlaying.value) {
      showControls.value = false;
    }
  }, 3000);
};

const handleMouseMove = () => {
  showControlsTemporarily();
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!videoRef.value) return;
  
  // Only handle keyboard events when the video container is focused or in fullscreen
  const isVideoFocused = document.activeElement === videoRef.value || 
                         document.activeElement === videoContainer.value ||
                         !!document.fullscreenElement;
  
  if (!isVideoFocused && !isFullscreen.value) return;
  
  switch (e.key) {
    case ' ':  // Space key
      e.preventDefault();
      togglePlay();
      break;
    case 'Enter':
      e.preventDefault();
      toggleFullscreen();
      break;
    case 'ArrowRight':
      e.preventDefault();
      skipForward();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      skipBackward();
      break;
    case 'm':
    case 'M':
      e.preventDefault();
      toggleMute();
      break;
    case 'f':
    case 'F':
      e.preventDefault();
      toggleFullscreen();
      break;
  }
};

const retryVideo = () => {
  if (!videoRef.value) return;
  
  videoError.value = false;
  errorMessage.value = '';
  isLoading.value = true;
  
  // Force reload the video
  const currentSrc = videoSource.value;
  videoSource.value = '';
  
  setTimeout(() => {
    videoSource.value = currentSrc;
    if (videoRef.value) {
      videoRef.value.load();
      videoRef.value.play().catch(err => {
        console.error('Error playing video on retry:', err);
        videoError.value = true;
        errorMessage.value = 'Failed to play video. Please try again later.';
      });
    }
  }, 100);
};

watch(
    () => route.fullPath,
    () => {
        window.scrollTo(0, 0);
    }
);

onMounted(() => {
  window.scrollTo(0, 0)
  document.addEventListener('fullscreenchange', () => {
    isFullscreen.value = !!document.fullscreenElement;
  });
  
  // Add keyboard event listener
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('keydown', handleKeydown);
  
  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
  }
});
</script>

<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <div class="container mx-auto px-4 py-8 mt-20"> 
       
        <div 
          ref="videoContainer" 
          class="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-xl mb-8"
          @mousemove="handleMouseMove"
          @touchstart="showControlsTemporarily"
          tabindex="0"
        > 
          <video 
            ref="videoRef"
            class="w-full h-full object-contain"
            :src="videoSource"
            preload="metadata"
            @play="isPlaying = true"
            @pause="isPlaying = false"
            @timeupdate="updateProgress"
            @loadedmetadata="loadedMetadata"
            @error="handleVideoError"
            @click="togglePlay"
            @waiting="isLoading = true"
            @canplay="isLoading = false"
          ></video>
          
          <!-- Loading Indicator -->
          <div 
            v-if="isLoading && !videoError" 
            class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <div class="loading loading-spinner loading-lg text-white"></div>
          </div>
          
          <!-- Error Display -->
          <div 
            v-if="videoError" 
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm p-4 text-center"
          >
            <AlertCircle class="w-12 h-12 text-red-500 mb-2" />
            <h3 class="text-lg font-semibold mb-2">Video Error</h3>
            <p class="text-gray-300 mb-4">{{ errorMessage }}</p>
            <button 
              @click="retryVideo" 
              class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
            >
              Retry
            </button>
          </div>

          <div 
            class="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
            :class="{ 'opacity-0': !showControls && isPlaying, 'opacity-100': showControls || !isPlaying }"
          >
  
            <div class="flex justify-between items-center">
              <div class="text-sm md:text-base font-medium">
          
              </div>
              <div>
    
              </div>
            </div>
            
     
            <div 
              v-if="!isPlaying && !videoError && !isLoading" 
              class="absolute inset-0 flex items-center justify-center"
              @click="togglePlay"
            >
              <button 
                class="w-16 h-16 md:w-20 md:h-20 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
              >
                <Play class="w-8 h-8 md:w-10 md:h-10 text-white" />
              </button>
            </div>
            
            <div class="space-y-2">

              <div class="w-full flex items-center">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.1"
                  :value="progressPercentage"
                  @input="seekVideo"
                  class="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-white"
                  :disabled="videoError"
                />
              </div>
              
              <!-- Control Buttons -->
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
            
                  <button 
                    @click="togglePlay" 
                    class="p-1 hover:bg-white/10 rounded-full transition-colors"
                    :disabled="videoError"
                  >
                    <Pause v-if="isPlaying" class="w-5 h-5" />
                    <Play v-else class="w-5 h-5" />
                  </button>
                  
               
                  <button 
                    @click="skipBackward" 
                    class="p-1 hover:bg-white/10 rounded-full transition-colors"
                    :disabled="videoError"
                  >
                    <SkipBack class="w-5 h-5" />
                  </button>
                  

                  <button 
                    @click="skipForward" 
                    class="p-1 hover:bg-white/10 rounded-full transition-colors"
                    :disabled="videoError"
                  >
                    <SkipForward class="w-5 h-5" />
                  </button>
                
                  <div class="flex items-center space-x-1">
                    <button 
                      @click="toggleMute" 
                      class="p-1 hover:bg-white/10 rounded-full transition-colors"
                      :disabled="videoError"
                    >
                      <Volume2 v-if="!isMuted" class="w-5 h-5" />
                      <VolumeX v-else class="w-5 h-5" />
                    </button>
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1"
                      :value="volume"
                      @input="changeVolume"
                      class="w-16 md:w-24 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer accent-white"
                      :disabled="videoError"
                    />
                  </div>
                  
                  <!-- Time Display -->
                  <div class="text-xs md:text-sm text-gray-300">
                    {{ formattedCurrentTime }} / {{ formattedDuration }}
                  </div>
                </div>
                
                <!-- Right Controls -->
                <div>
                  <!-- Fullscreen Button -->
                  <button 
                    @click="toggleFullscreen" 
                    class="p-1 hover:bg-white/10 rounded-full transition-colors"
                    :disabled="videoError"
                  >
                    <Maximize class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video Information Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Video Details -->
          <div class="lg:col-span-2 space-y-4">
            <!-- <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <div class="w-10 h-10 rounded-full bg-gray-700"></div>
                <div>
                  <h3 class="font-medium">Channel Name</h3>
                  <p class="text-sm text-gray-400">1.2M subscribers</p>
                </div>
              </div>
              <button class="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div> -->
            
            <div class="p-4 bg-gray-800/50 rounded-lg">
              <!-- <div class="flex items-center justify-between mb-2">
                <div class="text-sm text-gray-300">1.5M views • 3 days ago</div>
                <div class="flex items-center space-x-4">
                  <button class="flex items-center space-x-1 text-sm">
                    <span>👍</span>
                    <span>24K</span>
                  </button>
                  <button class="flex items-center space-x-1 text-sm">
                    <span>👎</span>
                    <span>1K</span>
                  </button>
                  <button class="flex items-center space-x-1 text-sm">
                    <span>💬</span>
                    <span>Share</span>
                  </button>
                </div>
              </div> -->
              
              <p class="text-sm md:text-base">
                {{ videoTitle }}
              </p>
              <p>{{ videoAuthor }}</p>

            </div>
          </div>
      
          <div class="space-y-4"> 
            <div class="space-y-3">
              <!-- Recommended Video Item (repeat as needed) -->
             <RecommendedCard :videoList="streamService.videoList"></RecommendedCard>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
/* Custom styling for range inputs */
input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

input[type="range"]::-moz-range-thumb {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

/* Hide controls when video is playing and mouse is inactive */
video::-webkit-media-controls {
  display: none !important;
}

/* Disabled button styling */
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>