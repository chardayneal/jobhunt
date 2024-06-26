import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='login'>
      <div className='login-container'>
        <section className='sign-in-col'>
          <div className='logo'><h1><span>j</span><i className="fa-solid fa-magnifying-glass"></i>bHunt</h1></div>
          <div className='sign-in-txt'>
            <h2>Welcome Back!</h2>
            <span>If you already have an account, please login with your personal info</span>
            <button className='style-btn'>SIGN IN</button>
          </div>
        </section>

        <section className='sign-up-container'>
          <div className='sign-up-col'>
            <div className='create-account-row'>
              <h2>Create Account</h2>
              <div className='social-links'>
                <div className='social-col'>
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className='social-col'>
                  <i class="fa-brands fa-google-plus-g"></i>
                </div>
                <div className='social-col'>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
              <span>or use your email for registration:</span>
            </div>
            <form className='sign-up-form'>
              <div className='name-info style-input'>
                <i class="fa-regular fa-user"></i>
                <input 
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name'
                  value=""
                  required
                />
              </div>
              <div className='name-info style-input'>
                <i class="fa-regular fa-envelope"></i>
                <input 
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email'
                  value=""
                  required
                />
              </div>
              <div className='name-info style-input'>
                <i class="fa-solid fa-lock"></i>
                <input 
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Password'
                  value=""
                  required
                />
                <i class="fa-regular fa-eye"></i>
                <i class="fa-regular fa-eye-slash"></i>
              </div>
              <input 
                className='style-btn'
                type='submit'
                value="SIGN UP"
              />

            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
