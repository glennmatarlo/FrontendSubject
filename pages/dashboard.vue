<template>
    <div>
        <NavBar />
        <div class="container">
            <h1>Dashboard</h1>
            <table class="table table-striped">
                <tr><th>ID</th><td>{{$auth.user.id}}</td></tr>
                <tr><th>User</th><td>{{$auth.user.name}}</td></tr>
                <tr><th>Email</th><td>{{$auth.user.email}}</td></tr>
            </table>
        </div>
    </div>
</template>