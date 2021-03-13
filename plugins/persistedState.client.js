import SecureLS from 'secure-ls'
import createPersistedState from 'vuex-persistedstate'

const ls = new SecureLS()

export default ({ store }) => {
  createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })(store)
}
