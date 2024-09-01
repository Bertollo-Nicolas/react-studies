import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import exercises from '../exercises';
import './home.scss'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
    <div className='content bg-zinc-950 text-zinc-100'>
      <h3 className="font-semibold tracking-tight group flex items-center gap-2 text-lg ">Bienvenue ! Choisissez un exercice :</h3>
      <Table className="">
        <TableHeader>
            <TableRow>
                <TableHead>Exercices</TableHead>
                <TableHead>Thème</TableHead>
            </TableRow>
        </TableHeader >
        <TableBody>
          {exercisesWithThemes.map((exercise, index) => (
              <TableRow key={index}>
                  <TableCell>
                      <Link to={`/${exercise.path}`}>{exercise.name}</Link>
                  </TableCell>
                  <TableCell>
                    {exercise.theme}
                  </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
      <nav>
        <ul>
          
        </ul>
      </nav>
    </div>
  );
};

export default Home;
