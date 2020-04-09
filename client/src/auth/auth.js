class Auth {
    constructor() {
        this.authenticated = false;
        this.usertype = null;
    }
  
    emplogin(callback) {
        this.authenticated = true;
        this.usertype = 'employee';

        callback();
    }

    adminlogin(callback) {
        this.authenticated = true;
        this.usertype = 'admin';
        
        callback();
    }
  
    logout(callback) {
        this.authenticated = false;
        this.usertype = null;
        
        callback();
    }
  
    isAuthenticated() {
        return this.authenticated;
    }

    isAdminAuthed() {
        if( this.usertype === 'admin' && this.authenticated ){
            return true
        }
        else return false;
    }

    isEmpAuthed() {
        if( this.usertype === 'employee' && this.authenticated ){
            return true
        }
        else return false;
    }

  }
  
  export default new Auth();
  