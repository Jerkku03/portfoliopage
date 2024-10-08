import React from "react";

export const NavBar = () => {
    return (
        <nav class="navbar bg-primary border-bottom border-body navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Etusivu</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <a class="nav-link active" aria-current="page" href="/projektit">Projektit</a>
                <a class="nav-link" href="/kukaolen">Kukaolen</a>
                <a class="nav-link" href="#">Yhteystiedot</a>
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
            </div>
        </div>
        </nav>
    )
}
