import React from 'react';
import { IconClipboardText, IconTarget } from '@tabler/icons-react';

const Exercice: React.FC = () => {
    return (<>
        <div className="exercice-content text-slate-400 text-[17px]">
            <h3 className='mb-2 text-sm leading-6 font-semibold text-sky-400 capitalize'>Hooks {">"} UseReducer</h3>
            <h1 className='inline-block text-2xl sm:text-3xl font-bold tracking-tight text-slate-200'>Toggling Multiple UI Elements</h1>
            <section className='bg-emerald-900/50 p-5 rounded-xl mt-10'>
                <h2 className='flex items-center text-emerald-500 font-bold text-lg'><IconTarget className='mr-2' /> Objective</h2>
                <p className="mt-4 leading-8 text-neutral-100">
                    Develop a dashboard containing multiple widgets that users can individually show or hide, managed by <span className=" bg-amber-500/30 rounded-sm text-amber-400 px-2 border-b-amber-400 border-b-2">useReducer</span>.
                </p>
            </section>
            <section className='bg-indigo-300/15 p-5 rounded-xl mt-10'>
                <h2 className='flex items-center text-indigo-400 font-bold text-lg'><IconClipboardText className='mr-2' /> Detailed Description</h2>
                <ul className="list-inside list-none space-y-3 mt-6">
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">Dashboard Layout:</span> Design a dashboard interface with various widgets such as charts, tables, forms, and tooltips.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">State Management:</span>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                            <li>
                                <span className="font-semibold text-slate-300">Visibility State:</span> Use <span className=" bg-indigo-500/30 rounded-sm text-indigo-400 px-2 border-b-indigo-400 border-b-2">useReducer</span> to track the visibility status of each widget, typically as boolean values.
                            </li>
                        <li>
                            <span className="font-semibold text-slate-300">Toggle Actions:</span> Define actions that toggle the visibility of each widget independently.
                        </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">User Controls:</span>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                        <li>
                            <span className="font-semibold text-slate-300">Toggle Buttons:</span> Provide controls (e.g., buttons or switches) for each widget, allowing users to show or hide them as desired.
                        </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">State Independence:</span>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                        <li>
                            <span className="font-semibold text-slate-300">Isolated State Changes:</span> Ensure that toggling one widget does not inadvertently affect the state of others.
                        </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">Persistency (Optional):</span>
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                        <li>
                            <span className="font-semibold text-slate-300">State Persistence:</span> Optionally, persist the visibility state so that user preferences are maintained across sessions or page reloads.
                        </li>
                        </ul>
                    </li>
                    </ul>
            </section>
            <section className="border-t-2 border-t-neutral-400 mt-10">
                <h2 className="text-2xl text-slate-100 font-semibold my-6">Considerations</h2>
                <ul className="list-inside list-none space-y-3">
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">Scalability:</span> Design the state structure to easily accommodate additional widgets in the future.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">Accessibility:</span> Ensure that toggle controls are accessible and provide clear indicators of each widget's visibility status.
                    </li>
                    <li>
                        <span className="font-semibold text-slate-300 mr-1">Performance:</span> Optimize rendering so that hiding a widget minimizes unnecessary component updates.
                    </li>
                </ul>
            </section>
        </div>
    </>






    );
};
export default Exercice;