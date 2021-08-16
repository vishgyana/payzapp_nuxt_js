import { API,API_MULTIPART,MULTIPART_HEADER_CONFIG } from '@/services/Api/Axioshelper.js';

export async function getCustomerdetails_api(uuid,fingerprint){
  return await API.get(`campaign_member_retrieve/${uuid}/${fingerprint}/`)
}

export async function postSteps_api(uuid,process_id){
  return await API.get(`timeline/${uuid}/${process_id}/`)
}

export async function userInputs_api(payload){
  return await API.post(`user_inputs/${payload.uuid}/`,payload)
}

export async function feedback_api(payload){
  return await API.post(`feedback/${payload.uuid}/`,payload)
}

export async function sendAudiototext_api(payload){
  return await API.post(`speech_to_text/`,payload)
}

export async function OTP_Send_API(payload){
  return await API.post(`otp/${payload}/0/`)
}

export async function OTP_Check_API(payload){
  return await API.get(`otp/${payload.UUID}/${payload.OTP}/`);
}

export async function Aadhar_Upload_API(payload){
  return await API_MULTIPART.post(`upload_aadhar/${payload.uuid}/`,payload.form,MULTIPART_HEADER_CONFIG)
}

export async function Reschedule_API(payload){
  return await API.post(`reschedule/${payload.UUID}/`)
}

