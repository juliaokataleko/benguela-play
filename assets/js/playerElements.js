import { secondsToMinutes } from './utils.js'

export default {
    get() {
        this.cover = document.querySelector(".card-image")
        this.title = document.querySelector(".card-content h5")
        this.artist = document.querySelector(".artist")
        this.playPause = document.querySelector("#play-pause")
        this.mute = document.querySelector("#mute")
        this.volume = document.querySelector("#vol-control")
        this.seekBar = document.querySelector("#seek-bar")
        this.currentDuration = document.querySelector("#current-duration")
        this.totalDuration = document.querySelector("#total-duration")
        this.nextButton = document.querySelector("#next-button");
        this.previousButton = document.querySelector("#previous-button");
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions() {
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause(); 
        this.mute.onclick = () => this.toggleMute();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);

        this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
        this.seekBar.onchange = () => this.setSeek(this.seekBar.value);

        this.seekBar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);

        this.nextButton.onclick = () => this.next();
        this.previousButton.onclick = () => this.previous();

    }
}