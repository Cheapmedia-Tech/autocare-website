<template>
  <div>
    <div class="h-16 w-full px-10 bg-search-gray py-3">
      <div class="relative w-4/5 sm:w-2/5 flex items-center">
        <button @click="addMarker" class="absolute left-0 ml-3">
          <img src="../assets/img/search-menu.svg" alt="search" class="h-4" />
        </button>
        <gmap-autocomplete
          @place_changed="setPlace"
          class="rounded-xl px-12 py-2 w-full font-segoe border focus:outline-none truncate text-autocare-blue border-map-gray text-sm"
          placeholder="Enter location"
        >
        </gmap-autocomplete>
        <button @click="addMarker" class="absolute right-0 mr-3">
          <img src="../assets/img/search.svg" alt="search" class="h-6" />
        </button>
      </div>
    </div>
    <gmap-map
      :center="center"
      :zoom="12"
      class="w-full min-h-screen sm:min-h-hscreen"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
