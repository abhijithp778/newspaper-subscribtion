import React from 'react'

const Navbar = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Subscribers</a>
        <a class="nav-link" href="/search">Search Subscribers</a>
        <a class="nav-link" href="/view">View Subscribers</a>
        <a class="nav-link" href="/delete">Delete Subscribers</a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
