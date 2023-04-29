import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDUM_KE7O261hsBja3tSDKJukJOHFwEoT8',
  authDomain: 'vue-project-31b95.firebaseapp.com',
  projectId: 'vue-project-31b95',
  storageBucket: 'vue-project-31b95.appspot.com',
  messagingSenderId: '823410601303',
  appId: '1:823410601303:web:301cfdab3175524f956212',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const createFirebaseUserWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error.code, error.message)
  }
}

export const signInFirebaseUserWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    return "success"
  } catch (error) {
    return error.code
  }
}

export const updateFirebaseUser = async (options) => {
  try {
    await updateProfile(auth.currentUser, options)
  } catch (error) {
    console.log(error.code, error.message)
  }
}

export const signOutFirebaseUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error.code, error.message)
  }
}

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback)
}
