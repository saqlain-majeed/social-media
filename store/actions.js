import firebaseApp from '~/firebaseapp'
import {firebaseAction} from 'vuexfire'

export default {
  onSetLogOut ({state, dispatch}) {
    firebaseApp.auth().signOut().then(() => {
      console.log('Signed Out')
    }).catch(error => {
      console.log('Sign Out Error=' + error)
    })
  },
  /* P O S T - A C T I O N S */
  addNewPost ({commit, state}, newPost) {
    if (state.postRef) {
      state.postRef.push(newPost)
    } else {
      commit('addNewPost', newPost)
    }
  },
  bindFirebaseSetPost: firebaseAction(({state, commit, dispatch}) => {
    let db = firebaseApp.database()
    let postRef = db.ref('/posts/' + state.userId)

    dispatch('bindFirebaseReference', {reference: postRef, toBind: 'profilePosts'}).then(() => {
      commit('setPostRef', postRef)
    })
  }),
  /* N E W - U S E R - A C T I O N S */
  createUserAuth ({commit, dispatch}, {email, password, newUser}) {
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(({uid}) => {
      commit('setAuthError', '')
      firebaseApp.database().ref('/users/' + uid).set(newUser)
      dispatch('bindAuth')
    })
    .catch(error => {
      commit('setAuthError', error.message)
    })
  },
  /* E D I T - P R O F I L E - A C T I O N S */
  editProfile ({commit, state}, newProfile) {
    if (state.newInfo) {
      state.newInfo.update(newProfile)
    }
  },
  authenticate ({state, commit, dispatch}, {email, password}) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(({uid}) => {
      commit('setAuthError', '')
      dispatch('bindAuth')
      console.log('*****authenticatedOKuid=' + uid)
    }).catch(err => {
      commit('setAuthError', err.message)
    })
  },
  bindAuth ({commit, dispatch, state}) {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        commit('setUser', user['uid'])
        dispatch('bindFirebaseSetProfile', user['uid'])
        console.log('*******bindAutOKuid=' + user.uid)
      } else {
        dispatch('unbindFirebaseReferences')
        console.log('*******UNbindAutOKuid=')
      }
    })
  },
  bindFirebaseSetProfile: firebaseAction(({state, commit, dispatch}, uid) => {
    let db = firebaseApp.database()
    let usrProfile = db.ref('/users/' + state.userId)
    console.log('*******SETTEDPROFILE' + state.userId)

    dispatch('bindFirebaseReference', {reference: usrProfile, toBind: 'userData'}).then(() => {
      commit('editProfileRef', usrProfile)
    })
  }),
  /* E N D - E D I T - P R O F I L E - A C T I O N S */
  /**
  * Generic binder of the firebase reference to the given key of the store's state
  * Checks if the value already exists in the database, otherwise will set it with the default store's state before binding
  * @param {object} store
  */
  bindFirebaseReference: firebaseAction(({bindFirebaseRef, state}, {reference, toBind}) => {
    return reference.once('value').then(snapshot => {
      if (!snapshot.val()) {
        let values = state[toBind]
        typeof values === 'object' && delete values['.key']
        reference.set(values)
      }
      bindFirebaseRef(toBind, reference)
    })
  }),
  /**
  * Undbinds firebase references
  bindFirebaseReference: firebaseAction(({bindFirebaseRef}, {reference, toBind}) => {
    reference.once('value').then(snapshot => snapshot.val() && bindFirebaseRef(toBind, reference))
  }),
  */
  unbindFirebaseReferences: firebaseAction(({unbindFirebaseRef, commit}) => {
    commit('setUser', null)
    commit('setUserData', null)
    commit('unSetPosts')
    console.log('unBindfirebasereferencesOK')
    try {
      unbindFirebaseRef('posts')
    } catch (error) {
      return
    }
  })
}
