const modules = import.meta.glob('./features/*/App.tsx');

const exercises = Object.keys(modules).map((path) => {
  const name = path.match(/\/([^/]*)\/App.tsx$/)?.[1] || 'Unknown Exercise';
  
  const formattedName = name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  const component = modules[path] as () => Promise<{ default: React.ComponentType<unknown>, theme?: string }>;

  return {
    name: formattedName,
    path: path.replace('./', '').replace('/App.tsx', ''),
    component,
    theme: component().then(mod => mod.theme || 'No theme specified'),
  };
});

export default exercises;
