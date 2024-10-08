import React from "react";

export const Kotisivu = () => {
    return (
        <>
        <div className="d-flex">
            <div className="m-4">
                <h3 className="m-4">Tervetuloa perehtymään kvantitatiivisen rahoituksen maailmaan kanssani.</h3>
                <p class="fw-light m-4">Sivustolla on erinäisiä rakentamiani projekteja </p>
                <div className="d-flex justify-content m-4">
                    <a href="/projektit" className="btn btn-primary" role="button" aria-disabled="true">Projektit</a>
                    <div className="m-3"></div>
                    <a href="/kukaolen" className="btn btn-secondary" role="button" aria-disabled="true">Kuka olen</a>
                </div>
            </div>
            <div className="m-4">
                <img
                className='img-fluid, rounded'
                src={'../src/assets/koodi_kuva.jpg'}
                alt='koodia'
                />
            </div>
        </div>
        </>
    )
}