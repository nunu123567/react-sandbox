import React from 'react';

// Import the newly created component
import {Profile} from './components/Profile';
import { TeamCard } from './components/TeamCard';
export default function App() {
  return (
    <div className="min-h-screen bg-pink-100 p-8 flex flex-col items-center">
      <h1 className='text-4xl font-bold mb-10 text-slate-700'>
        Welcome to React!
      </h1>

      <div className='mb-10'>
        <Profile name="Sanuji" role="Junior Developer"/>
      </div>

      <div className='flex gap-4 flex-wrap justify-center'>
        <TeamCard name = "Alice" role="Frontend developer" />
        <TeamCard name="Bob" role="Backend Developer" />
        <TeamCard name="Charlie" role="UI/UX Designer" />
      </div>
      
    </div>
  );
}
