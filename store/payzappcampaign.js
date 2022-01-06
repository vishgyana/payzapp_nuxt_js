import {
  getCustomerdetails_api,
  userInputs_api,
  feedback_api,
  sendAudiototext_api,
  OTP_Send_API,
  OTP_Check_API,
  Aadhar_Upload_API,
  Reschedule_API
} from "@/services/Api/payzappcampaign.js";

import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    campaign_member: {},
    selectedIndex: 0,
    InputData: { communication: [], card: "", feedback_description: "" },
    audioMuted: "false",
    feedBack: "false",
    buttonBlink: "false",
    repeatBtnclickcount: 1,
    mainpageRender: false,
    selectedCampaignoffer: null,
    googleAddress: null,
    isShowcuriousbutton: 0,
    isShowsurprisesection: true,
    isAnimationblockadded: false,
    DeviceOS: null,
    is_scratchcardDone: false,
    selectedAudiokey : "surprise",
    audiolink: [
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/billpayment.mp3",
        key : "billpayment"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/claimoffers.mp3",
        key : "claimoffers"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/congratulations.mp3",
        key : "congratulations"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/entertainment.mp3",
        key : "entertainment"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/fooddeliverytab.mp3",
        key : "fooddeliverytab"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/getcashback.mp3",
        key : "getcashback"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/groceries.mp3",
        key : "groceries"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/hellospeech.mp3",
        key : "hellospeech"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/service.mp3",
        key : "service"
      },
      {
        url:
        "https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/surprise.mp3",
        key : "surprise"
      }
    ],
    AudioStatus: {
      Audiofileduration: 0,
      Audiounmuteplayduration: 0,
      Audiomuteplayduration: 0
    }
  }),
  actions: {
    increaseIndex(context) {
      let updatedvalue = Number(context.state.selectedIndex) + 1;
      context.commit("UpdateIndexCommit", updatedvalue);
    },
    decreaseIndex(context) {
      let updatedvalue = Number(context.state.selectedIndex) - 1;
      context.commit("UpdateIndexCommit", updatedvalue);
    },
    audioMute(context) {
      context.commit("updateAudioIcon", "true");
    },
    audioUnmute(context) {
      context.commit("updateAudioIcon", "false");
    },
    changebuttonBlink(context, payload) {
      context.commit("UpdatebuttonBlink", payload);
    },
    getCustomerdetails(context, payload) {
      getCustomerdetails_api(payload.campaign_member_id, payload.fingerprint)
        .then(({ data }) => {
          context.commit("Updatecampaign_member", data);
        })
        .catch(err => {});
    },
    postSteps(context, payload) {
      // postSteps_api(payload,context.getters.processId).then(() => {
      // }).catch(err => {
      // })
    },
    submituserInputs(context, payload) {
      let newPayload = {
        uuid: payload,
        communication_mode: context.state.InputData.communication,
        due_payment_mode: context.state.InputData.card,
        feedback_description: context.state.InputData.feedback_description
      };

      userInputs_api(newPayload)
        .then(() => {
          context.dispatch("increaseIndex");
        })
        .catch(err => {});
    },
    submitFeedback(context, payload) {
      feedback_api(payload)
        .then(() => {})
        .catch(err => {});
    },
    repeatBtnclickaction(context) {
      let Count = Number(context.state.repeatBtnclickcount);
      Count++;
      context.commit("mutate_repeatbtncount", Count);
    },
    mainpageRenderAction(context, payload) {
      context.commit("mutate_mainpageRender", payload);
    },
    async sendAudiototext({ commit }, payload) {
      return new Promise((resolve, reject) => {
        sendAudiototext_api(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    async call_OTP_Send_API({ commit }, payload) {
      return new Promise((resolve, reject) => {
        OTP_Send_API(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    async call_OTP_Check_API({ commit }, payload) {
      return new Promise((resolve, reject) => {
        OTP_Check_API(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    async call_Aadhar_Upload_API({ commit }, payload) {
      return new Promise((resolve, reject) => {
        Aadhar_Upload_API(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    async call_Reschedule_API({ commit }, payload) {
      return new Promise((resolve, reject) => {
        Reschedule_API(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    setCampaignoffer({ commit }, payload) {
      commit("mutate_campaignoffer", payload);
    },
    async getStreetAddressFrom({ commit }, payload) {
      try {
        var { data } = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            payload.lat +
            "," +
            payload.long +
            "&key=AIzaSyBh1Ss2R2P7bFKzZ2jTi8Lfi7BMqqgnrH4"
        );
        if (data.error_message) {
          console.log(data.error_message);
        } else {
          commit("mutate_googleAddress", data.results[0].address_components);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    setShowcuriousbutton({ commit }, payload) {
      commit("mutate_showcuriousbutton", payload);
    },
    setShowsurprisesection({ commit }, payload) {
      commit("mutate_surprisesection", payload);
    },
    setAnimationblockadded({ commit }, payload) {
      commit("mutate_animationblockadded", payload);
    },
    setscratchcardDone({ commit }, payload) {
      commit("mutate_is_scratchcardDone", payload);
    }
  },
  mutations: {
    UpdateIndexCommit(state, payload) {
      state.selectedIndex = payload;
    },
    updateAudioIcon(state, payload) {
      state.audioMuted = payload;
    },
    FeedBackIcon(state, payload) {
      state.feedBack = payload;
    },
    UpdatebuttonBlink(state, payload) {
      state.buttonBlink = payload;
    },
    Updatecampaign_member(state, payload) {
      state.campaign_member = payload;
    },
    updateInputDatacommunication(state, payload) {
      state.InputData.communication = payload;
    },
    updateInputDatacard(state, payload) {
      state.InputData.card = payload;
    },
    updateDescription(state, payload) {
      state.InputData.feedback_description = payload;
    },
    mutate_repeatbtncount(state, payload) {
      state.repeatBtnclickcount = payload;
    },
    mutate_mainpageRender(state, payload) {
      state.mainpageRender = payload;
    },
    mutate_campaignoffer(state, payload) {
      state.selectedCampaignoffer = payload;
    },
    mutate_googleAddress(state, payload) {
      state.googleAddress = payload;
    },
    mutate_showcuriousbutton(state, payload) {
      state.isShowcuriousbutton = payload;
    },
    mutate_surprisesection(state, payload) {
      state.isShowsurprisesection = payload;
    },
    mutate_animationblockadded(state, payload) {
      state.isAnimationblockadded = payload;
    },
    mutate_deviceos(state, payload) {
      state.DeviceOS = payload;
    },
    mutate_is_scratchcardDone(state, payload) {
      state.is_scratchcardDone = payload;
    },
    mutate_selectedAudiokey(state, payload) {
      state.selectedAudiokey = payload;
    },
  },
  getters: {
    selectedObj: state => {
      for (let i=0; i < state.audiolink.length; i++) {
        if (state.audiolink[i].key === state.selectedAudiokey) {
          return state.audiolink[i];
        }
      }
    },
    isaudioMuted: state => {
      return state.audioMuted;
    },
    processId: state => {
      let stage = "";

      if (state.selectedIndex == "0") {
        stage = 3;
      } else if (state.selectedIndex == "1") {
        stage = 4;
      } else if (state.selectedIndex == "2") {
        stage = 5;
      } else if (state.selectedIndex == "3") {
        stage = 6;
      } else if (state.selectedIndex == "4") {
        stage = 8;
      }

      return stage;
    },
    getter_communication(state) {
      return state.InputData.communication;
    },
    getter_card(state) {
      return state.InputData.card;
    },
    getter_feedback_description(state) {
      return state.InputData.feedback_description;
    },
    getter_city_state_name(state) {
      let cityname = state.googleAddress
        ? state.googleAddress[1].short_name
        : "";
      let statename = state.googleAddress
        ? state.googleAddress[2].short_name
        : "";

      return { cityname, statename };
    }
  }
};

