import axios from "axios";
import handleAxiosError from "../../node_modules/axios";
import handleUnexpectedError from "../../node_modules/axios";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Playlist } from "./Playlist";
import { userInfo } from "os";
export default class User {
  token: string;
  playlists: Playlist[];
  name: string;
  email: string;
  endpoint: string;
  id: string;
  constructor(endpoint: string, token: string) {
    this.email = "";
    this.name = "";
    this.playlists = [];
    this.token = token;
    this.endpoint = endpoint;
    this.id = "";
    this.setInfo();
  }
  setInfo() {
    console.log(localStorage.getItem("accessToken"));
    console.log(this.endpoint);
    console.log(this.token);
    axios
      .get(this.endpoint + "me", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        console.log(response.data);

        this.setId(response.data.id);
        this.email = response.data.email;
        this.name = response.data.display_name;
        this.addPlayList("Test Playlist", "test playlist description");
        localStorage.setItem("userId", this.id);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("userName", response.data.display_name);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setPlayLists() {
    console.log(this.endpoint + "/playlists");
    axios
      .get(this.endpoint + "/playlists", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getId() {
    return this.id;
  }
  setId(value: string) {
    this.id = value;
  }
  getToken() {
    return localStorage.getItem("accessToken");
  }

  getPlaylists() {
    return this.playlists;
  }
  addPlayList(name: string, description: string) {
    //let playlist = new Playlist("Test Playlist", "test playlist description");
    console.log("getting id" + this.id);
    axios
      .post(this.endpoint + "/users/" + this.id + "/playlists", {
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
        data: {
          name: name,
          description: description,
          public: false,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    //this.playlists?.push(value);
  }
  setEmail(value: string) {
    this.email = value;
  }
  getEmail() {
    return this.email;
  }
  setName(value: string) {
    this.name = value;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
}
