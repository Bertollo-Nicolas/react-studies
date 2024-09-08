import React, { useEffect, useState } from 'react';
import exercises from '../exercises';
import './home.scss'
import App from '@/features/todoListReducer/App';

const Home: React.FC = () => {
  const [exercisesWithThemes, setExercisesWithThemes] = useState<{ name: string; path: string; theme: string }[]>([]);

  useEffect(() => {
    async function fetchThemes() {
      const resolvedExercises = await Promise.all(
        exercises.map(async (exercise) => {
          const theme = await exercise.theme;
          return { ...exercise, theme };
        })
      );
      setExercisesWithThemes(resolvedExercises);
    }

    fetchThemes();
  }, []);

  return (
    <div className='home bg-zinc-950 text-neutral-100 w-screen h-screen overflow-hidden p-5'>
      <div className="home-preview flex justify-between h-full">
        <div className="home-preview-left w-full flex justify-between flex-col">
          <div className="bg-neutral-900 w-full h-[70%] rounded-3xl overflow-x-hidden">
            <App />
          </div>
          <div className="bg-neutral-900 w-full h-[28%] rounded-3xl p-10 text-7xl">
            <h1 className='w-5/12'>Todo List with Multiple Filters</h1>
          </div>
        </div>
        <div className='home-preview-right flex flex-col w-[30%] ml-5 justify-between'>
          <div className="flex flex-col h-[70%] justify-between">
            <div className="bg-neutral-900 w-full h-[17%] rounded-3xl"></div>
            <div className="bg-orange-200 w-full h-[80%] rounded-3xl"></div>
          </div>
          <div className="flex flex-col h-[28%] justify-between">
            <div className="bg-neutral-900 w-full h-[46%] rounded-3xl"></div>
            <div className="bg-neutral-900 w-full h-[46%] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
