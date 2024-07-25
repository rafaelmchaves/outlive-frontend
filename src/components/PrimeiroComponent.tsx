'use client'

export function PrimeiroComponent() {

    function handleClick() {
        console.log("clique");
    }

    return (
        <div>
            Meu primeiro componente!
            <button onClick={handleClick}>Click here</button>
        </div>
    );


}