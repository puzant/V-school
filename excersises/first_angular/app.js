var app = angular.module('myapp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.people = [
        {
            name: 'Nebuchadnezzar',
            age: 101,
            job: 'king of coding'
  },
        {
            name: 'Hamoudi',
            age: 13,
            job: 'king of chicken escalope'
  },
        {
            name: 'Kim Jung Un',
            age: 12,
            job: 'lover of disney world'
  },
        {
            name: 'Malak Al Tawouk',
            age: 24,
            job: 'death by chicken'
  },
        {
            name: 'Vladmir Putin',
            age: 21,
            job: 'loves riding ponies'
  },
        {
            name: 'Mazen',
            age: 22,
            job: 'loves to dabke while bathing in yoghurt'
  },
        {
            name: 'Jacob',
            age: 19,
            job: 'yell and talk fast'
  },
        {
            name: 'Raeed',
            age: 25,
            job: 'King of Latakia'
  },
        {
            name: 'Joe',
            age: 302,
            job: 'break dance'
  }
]
})