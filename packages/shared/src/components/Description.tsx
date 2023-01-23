import React, {useState} from 'react';

export const Description = () => {
    const [shown, setShown] = useState<number | null>(null);
    const [shownCraco, setShownCraco] = useState<boolean>(false);
    const [shownReducerManager, setShownReducerManager] = useState<boolean>(false);
    const shownHandler = (value: number): void => {
        value === shown ? setShown(null) : setShown(value);
    }

    return (
        <ul className={"max-w-5xl mx-auto"}>
            <li className={"text-xl font-bold mb-4"}>
                Монорепо проект разработан с помощью <a href="https://lerna.js.org/" className={"text-primary-blue hover:text-primary-blue/70 font-bold"}>lerna</a>:
            </li>
            <li onClick={() => shownHandler(1)}>
                1. <span className={"cursor-pointer font-bold text-primary-blue hover:text-primary-blue/70"}>Пакет @monorepo/main:</span>
            </li>
            <li>
                <div className={"text-sm text-gray-500 ml-4"}>
                    <p>React проект</p>
                    <p>Проиницилизирован с помощью npx create-react-app</p>
                    <p>Запускается на localhost:3000</p>
                </div>
            </li>
            {
                shown === 1 && <li>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"dependencies": [</p>
                        <p className={"ml-4"}>"@monorepo/shared": "*", <span className={"text-gray-300"}>- пакет shared</span></p>
                        <p className={"ml-4"}>"axios": "^1.2.2",</p>
                        <p className={"ml-4"}>"formik": "^2.2.9",</p>
                        <p className={"ml-4"}>"react": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-dom": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-router-dom": "^6.6.2",</p>
                        <p className={"ml-4"}>"typescript": "^4.9.4",</p>
                        <p className={"ml-4"}>"zustand": "^4.2.0"</p>
                        <p>]</p>
                    </div>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"devDependencies": [</p>
                        <p
                            className={"text-red hover:text-red/70 font-bold cursor-pointer ml-4"}
                            onClick={() => setShownCraco(!shownCraco)}
                        >
                            "@craco/craco": "^7.0.0", <span className={"text-gray-300"}>- библиотека для настройки конфигурации ESLint, Babel, PostCSS и многое другое</span>
                        </p>
                        {
                            shownCraco && <div className={"shadow-gray-100 bg-white-blue p-4 my-4 ml-12"}>
                                <code>
                                    <span className={"font-bold text-orange"}>const</span> path = <span className={"font-bold text-red"}>require</span>("path");
                                    <br/>
                                    <span className={"font-bold text-orange"}>const</span> [<span className={"font-bold text-primary-blue"}>getLoader, loaderByName</span>] = <span className={"font-bold text-red"}>require</span>("@craco/craco");
                                    <br/>
                                    <br/>
                                    <span className={"font-bold text-orange"}>const</span> packages = [];
                                    <br/>
                                    packages.<span className={"font-bold text-primary-blue"}>push</span>(path.<span className={"font-bold text-primary-blue"}>join</span>(<span className={"font-bold text-red"}>__dirname</span>, "../shared"));
                                    <br/>
                                    <br/>
                                    <span className={"font-bold text-red"}>module.exports</span> = [
                                    <br/>
                                    <span className={"ml-4"}><span className={"font-bold text-red"}>webpack</span>: [</span>
                                    <br/>
                                    <span className={"ml-8"}><span className={"font-bold text-primary-blue"}>configure</span>: (webpackConfig, _) = [</span>
                                    <br/>
                                    <span className={"ml-12"}>const [ isFound, match ] = <span className={"font-bold text-primary-blue"}>getLoader</span>(</span>
                                    <br/>
                                    <span className={"ml-16"}>webpackConfig,</span>
                                    <br/>
                                    <span className={"ml-16"}><span className={"font-bold text-primary-blue"}>loaderByName</span>("babel-loader")</span>
                                    <br/>
                                    <span className={"ml-12"}>);</span>
                                    <br/>
                                    <span className={"ml-12"}><span className={"font-bold text-orange"}>if</span> (isFound) [</span>
                                    <br/>
                                    <span className={"ml-16"}><span className={"font-bold text-orange"}>const</span> include = Array.<span className={"font-bold text-primary-blue"}>isArray</span>(match.loader.include)</span>
                                    <br/>
                                    <span className={"ml-20"}>? match.loader.include</span>
                                    <br/>
                                    <span className={"ml-20"}>: [match.loader.include];</span>
                                    <br/>
                                    <span className={"ml-16"}>match.loader.include = include.<span className={"font-bold text-primary-blue"}>concat</span>(packages);</span>
                                    <br/>
                                    <span className={"ml-12"}>]</span>
                                    <br/>
                                    <span className={"ml-12"}><span className={"font-bold text-orange"}>return</span> webpackConfig;</span>
                                    <br/>
                                    <span className={"ml-8"}>],</span>
                                    <br/>
                                    <span className={"ml-4"}>],</span>
                                    <br/>
                                    ];
                                </code>
                            </div>
                        }
                        <p className={"ml-4"}>"autoprefixer": "^10.4.13",</p>
                        <p className={"ml-4"}>"postcss": "^8.4.21"</p>
                        <p className={"ml-4"}>"tailwindcss": "^3.2.4"</p>
                        <p>]</p>
                    </div>
                </li>
            }
            <li onClick={() => shownHandler(2)}>
                2. <span className={"cursor-pointer font-bold text-primary-blue hover:text-primary-blue/70"}>Пакет @monorepo/client:</span>
            </li>
            <li>
                <div className={"text-sm text-gray-500 ml-4"}>
                    <p>React проект</p>
                    <p>Проиницилизирован с помощью npm create vite@latest</p>
                    <p>Запускается на localhost:4200</p>
                </div>
            </li>
            {
                shown === 2 && <li>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"dependencies": [</p>
                        <p className={"ml-4"}>"@monorepo/shared": "*", <span className={"text-gray-300"}>- пакет shared</span></p>
                        <p className={"ml-4"}>"axios": "^1.2.2",</p>
                        <p className={"ml-4"}>"formik": "^2.2.9",</p>
                        <p className={"ml-4"}>"react": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-dom": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-router-dom": "^6.6.2",</p>
                        <p className={"ml-4"}>"mobx": "^6.7.0",</p>
                        <p className={"ml-4"}>"mobx-react-lite": "^3.4.0",</p>
                        <p>]</p>
                    </div>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"devDependencies": [</p>
                        <p className={"ml-4"}>"@types/react": "^18.0.26",</p>
                        <p className={"ml-4"}>"@types/react-dom": "^18.0.9",</p>
                        <p className={"ml-4"}>"@vitejs/plugin-react": "^3.0.0",</p>
                        <p className={"ml-4"}>"autoprefixer": "^10.4.13",</p>
                        <p className={"ml-4"}>"postcss": "^8.4.20",</p>
                        <p className={"ml-4"}> "tailwindcss": "^3.2.4",</p>
                        <p className={"ml-4"}>"typescript": "^4.9.3",</p>
                        <p className={"ml-4"}>"vite": "^4.0.0"</p>
                        <p>]</p>
                    </div>
                </li>
            }
            <li onClick={() => shownHandler(3)}>
                3. <span className={"cursor-pointer font-bold text-primary-blue hover:text-primary-blue/70"}>Пакет @monorepo/manager:</span>
            </li>
            <li>
                <div className={"text-sm text-gray-500 ml-4"}>
                    <p>React проект</p>
                    <p>Проиницилизирован с помощью npm create vite@latest</p>
                    <p>Запускается на localhost:5000</p>
                    <p>Реализован <span className={"font-bold text-green hover:text-green/70 cursor-pointer"} onClick={() => setShownReducerManager(!shownReducerManager)}>dynamic Reducer</span></p>
                    {
                        shownReducerManager && <div className={"shadow-gray-100 bg-white-blue p-4 my-4 ml-12"}>
                            <code>
                                <span className={"font-bold text-orange"}>import</span> [<span className={"font-bold text-primary-blue"}>AnyAction, combineReducers, Reducer, ReducersMapObject</span>] <span className={"font-bold text-orange"}>from </span>(<span className={"font-bold text-green"}>"@reduxjs/toolkit"</span>);
                                <br/>
                                <span className={"font-bold text-orange"}>import</span> [<span className={"font-bold text-primary-blue"}>ReducerManager, StateSchema, StateSchemaKey</span>] <span className={"font-bold text-orange"}>from </span>(<span className={"font-bold text-green"}>"./stateSchema"</span>);
                                <br/>
                                <br/>
                                <span className={"font-bold text-orange"}>export function</span> <span className={"font-bold text-primary-blue"}>createReducerManager</span> (initialReducers: ReducersMapObject|StateSchema|): ReducerManager [
                                <br/>
                                <div className={"ml-4"}>
                                    <span className={"font-bold text-orange"}>const</span> reducers = [...initialReducers];
                                    <br/>
                                    <span className={"font-bold text-orange"}>let</span> combinedReducer = <span className={"font-bold text-primary-blue"}>combineReducers</span>(reducers);
                                    <br/>
                                    <span className={"font-bold text-orange"}>let</span> keysToRemove: Array|StateSchemaKey| = [];
                                    <br/>
                                    <br/>
                                    <span className={"font-bold text-orange"}>return</span> [
                                    <br/>
                                    <div className={"ml-4"}>
                                        <span className={"font-bold text-primary-blue"}>getReducerMap</span>: () ={">"} reducers,
                                        <br/>
                                        <span className={"font-bold text-primary-blue"}>reduce</span>: (state: StateSchema, action: AnyAction) ={">"} [
                                        <br/>
                                        <span className={"font-bold text-orange ml-4"}>if</span> (keysToRemove.length {">"} 0) [
                                        <br/>
                                        <span className={"ml-8"}>state = [...state];</span>
                                        <br/>
                                        <span className={"ml-8"}>keysToRemove.<span className={"font-bold text-primary-blue"}>forEach</span>((key) ={">"} [</span> <span className={"font-bold text-orange"}>delete</span> state[key]; ]);
                                        <br/>
                                        <span className={"ml-8"}>keysToRemove = [];</span>
                                        <br/>
                                        <span className={"ml-4"}>]</span>
                                        <br/>
                                        <span className={"font-bold text-orange ml-4"}>return</span> combinedReducer(state, action);
                                        <br/>
                                        ],
                                        <br/>
                                        <span className={"font-bold text-primary-blue"}>add</span>: (key: StateSchemaKey, reducer: Reducer) ={">"} [ ... ],
                                        <br/>
                                        <span className={"font-bold text-primary-blue"}>remove</span>: (key: StateSchemaKey) ={">"} [ ... ],
                                    </div>
                                    ];
                                </div>
                                ];
                            </code>
                        </div>
                    }
                </div>
            </li>
            {
                shown === 3 && <li>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"dependencies": [</p>
                        <p className={"ml-4"}>"@monorepo/shared": "*", <span className={"text-gray-300"}>- пакет shared</span></p>
                        <p className={"ml-4"}>"@reduxjs/toolkit": "^1.8.5",</p>
                        <p className={"ml-4"}>"axios": "^1.2.2",</p>
                        <p className={"ml-4"}>"formik": "^2.2.9",</p>
                        <p className={"ml-4"}>"react": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-dom": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-redux": "^8.0.2",</p>
                        <p className={"ml-4"}>"react-router-dom": "^6.6.2",</p>
                        <p>]</p>
                    </div>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"devDependencies": [</p>
                        <p className={"ml-4"}>"@types/react": "^18.0.26",</p>
                        <p className={"ml-4"}>"@types/react-dom": "^18.0.9",</p>
                        <p className={"ml-4"}>"@vitejs/plugin-react": "^3.0.0",</p>
                        <p className={"ml-4"}>"autoprefixer": "^10.4.13",</p>
                        <p className={"ml-4"}>"postcss": "^8.4.20",</p>
                        <p className={"ml-4"}> "tailwindcss": "^3.2.4",</p>
                        <p className={"ml-4"}>"typescript": "^4.9.3",</p>
                        <p className={"ml-4"}>"vite": "^4.0.0"</p>
                        <p>]</p>
                    </div>
                </li>
            }
            <li onClick={() => shownHandler(4)}>
                4. <span className={"cursor-pointer font-bold text-primary-blue hover:text-primary-blue/70"}>Пакет @monorepo/shared:</span>
            </li>
            <div className={"text-sm text-gray-500 ml-4"}>
                <p>React проект</p>
                <p>Проиницилизирован с помощью npx create-react-app</p>
                <p>Сожержить base компоненты, хелперы, хуки</p>
            </div>
            {
                shown === 4 && <li>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"dependencies": [</p>
                        <p className={"ml-4"}>"react": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-dom": "^18.2.0",</p>
                        <p className={"ml-4"}>"react-router-dom": "^6.6.2",</p>
                        <p className={"ml-4"}>"typescript": "^4.9.4",</p>
                        <p>]</p>
                    </div>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"devDependencies": [</p>
                        <p className={"ml-4"}>"autoprefixer": "^10.4.13",</p>
                        <p className={"ml-4"}>"postcss": "^8.4.21"</p>
                        <p>]</p>
                    </div>
                </li>
            }
            <li onClick={() => shownHandler(5)}>
                5. <span className={"cursor-pointer font-bold text-primary-blue hover:text-primary-blue/70"}>Пакет @monorepo/server:</span>
            </li>
            <li>
                <div className={"text-sm text-gray-500 ml-4"}>
                    <p>Проиницилизирован с помощью npm init -y</p>
                    <p>Запускается на localhost:8000</p>
                </div>
            </li>
            {
                shown === 5 && <li>
                    <div className={"ml-4"}>
                        <p className={"text-red font-bold"}>"devDependencies": [</p>
                        <p className={"ml-4"}>"json-server": "^0.17.1",</p>
                        <p className={"ml-4"}>"nodemon": "^2.0.20"</p>
                        <p>]</p>
                    </div>
                </li>
            }
        </ul>
    );
};
