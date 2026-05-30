import React, { useState } from 'react'
import { heroSectionData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { BikeIcon, EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, MailIcon, UserIcon } from 'lucide-react';

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if(!isLoginState && password !== confirmPassword) {
      // don't submit, show error
      return;
    }
    setLoading(true);
    setTimeout(() => window.location.href = '/', 1000);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img src={heroSectionData.hero_image} alt="" className="absolute inset-0 object-cover h-full bg-center opacity-10"/>
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Welcome back to Instacart</h2>
          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">Fresh groceries and organic produce, delivered to your doorstep</p>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">
          {/* form header message */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <BikeIcon className='size-8 text-app-green' />
              <span className="text-2xl font-semibold text-app-green">Instacart</span>
            </Link>
            <h1 className='text-2xl font-semibold text-app-green mb-2'>{isLoginState ? 'Sign in to your account' : 'Sign up for an account'}</h1>
            <p className="text-sm text-app-text-light">
              {isLoginState ? "Don't have an account? " : 'Already have an account? '} 
              <button onClick={()=>setIsLoginState(!isLoginState)} className="text-orange-500 ml-1 font-semibold 
              hover:text-orange-600 transition-colors">{isLoginState ? 'Sign up' : 'Sign in'}</button>
            </p>
          </div>

          {/* Login / Register form */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            {!isLoginState && (
              <label className='text-sm flex flex-col gap-1'>
                Name
                <div className='relative'>
                  <MailIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                  <input type="text" 
                  value={name} 
                  onChange={(e)=>{
                    setName(e.target.value)
                    if (submitAttempted) setSubmitAttempted(false)
                    }}
                  required
                  placeholder="Your name" 
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border
                  not-focus:border-app-border transition-all" />
                </div>
              </label>
            )}

            <label className='text-sm flex flex-col gap-1'>
                Email
                <div className='relative'>
                  <UserIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                  <input type="email" 
                  value={email} 
                  onChange={(e)=>{
                    setEmail(e.target.value)
                    if (submitAttempted) setSubmitAttempted(false)
                    }}
                  required
                  placeholder="you@example.com" 
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border
                  not-focus:border-app-border transition-all" />
                </div>
              </label>

              <label className='text-sm flex flex-col gap-1'>
                Password
                <div className='relative'>
                  <LockIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                  <input type={showPassword? 'text' : 'password'}
                  value={password} 
                  onChange={(e)=>{
                    setPassword(e.target.value)
                    if (submitAttempted) setSubmitAttempted(false)
                  }}
                  required
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border
                  not-focus:border-app-border transition-all" />
                  {password.length > 0 && (
                    <button type="button" onClick={()=>setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-app-text-light
                    hover:text-app-green transition-colors">
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  )}
                </div>
              </label>
              
              {!isLoginState && (
                <label className='text-sm flex flex-col gap-1'>
                  Confirm Password
                  <div className='relative'>
                    <LockIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light' />
                    <input type={showPassword? 'text' : 'password'}
                    value={confirmPassword} 
                    onChange={(e)=>{
                      setConfirmPassword(e.target.value)
                      if (submitAttempted) setSubmitAttempted(false)
                    }} 
                    required
                    placeholder="••••••••" 
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border
                    not-focus:border-app-border transition-all" />
                    {confirmPassword.length > 0 && (
                      <button type="button" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-app-text-light
                      hover:text-app-green transition-colors">
                        {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    )}
                  </div>
                  {(submitAttempted && !isLoginState && password !== confirmPassword) && (
                    <p className="text-red-500 text-xs">Passwords do not match</p>
                  )}
                </label>
              )}

              <button type="submit" disabled={loading}
              className="w-full flex-center py-3 bg-green-950 text-white
              font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50" >
                {loading ? <Loader2Icon className="animate-spin" /> : isLoginState ? 'Sign In' : 'Sign Up'}
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login