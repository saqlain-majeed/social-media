export default {
  addNewPost (state, newPost) {
    state.profilePosts.unshift(newPost)
  },
  editProfileRef (state, value) {
    state.newInfo = value
  },
  unSetPosts (state) {
    state.profilePosts = []
  },
  setPostRef (state, value) {
    state.postRef = value
  },
  setUser (state, userid) {
    state.userId = userid
  },
  setUserData (state, userData) {
    state.userData = userData
  },
  setAuthError (state, value) {
    state.authError = value
  }
}
