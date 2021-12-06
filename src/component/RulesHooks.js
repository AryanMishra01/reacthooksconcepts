// 1. Always write it inside the component or function
// 2. component name must be PascalCase (first letter should be uppercase)
// 3. we can directly import or we can directly write it using React.HookName
// 4. Don't call Hooks inside loops. conditions or nested functions.

import React from 'react'

const RulesHooks = () => {
    const[myName, setMyName] = React.useState('Aryan');
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
}

export default RulesHooks
