<?php

if (isset($_POST['name']) && isset($_POST['firstname']) && isset($_POST['age'])) {

    if (file_exists('data.json')) {
        $users = json_decode(file_get_contents('data.json'), true);
    } else {
        $users = [];
    }

    $users[] = [
        'name' => $_POST['name'],
        'firstname' => $_POST['firstname'],
        'age' => $_POST['age']
    ];

    file_put_contents('data.json', json_encode($users));
}

header('Content-Type: application/json');
echo json_encode($users);
?>