angular.module('dzPhrasing.controllers', []).
controller('dzPhrasingCtrl', function ($scope) {
    $scope.headings = [
        'Comment', 'Speaker', 'Explanation', 'Link'
    ];

    $scope.phrases = [
        [ 
            '"Wayne Stank"',
            'Roger',
            'In reference to butt kissing Wayne.',
            ''
        ],
        [
            "That's what she said.",
            'Everyone',
            'TWSS!',
            'http://youtu.be/B8pOmrRAetk'
        ],
        [
            "You Bach'd Up",
            'Stephen',
            'To perform a Bach!',
            ''
        ],
        [
            'Man, I got a blister right between my .....',
            'Bach',
            'No explanation needed.',
            ''
        ],
        [
            'Boffa',
            'Phil',
            'Both of these...',
            ''
        ],
        [
            "Whatever we don't finish, we just won't deliver",
            'Bach',
            'Project almost ended at Sprint 2',
            ''
        ],
        [
            'Did you meet your wife before you got fat?',
            'Bach',
            'Asking Chris while looking at photo of Chris and his wife.',
            ''
        ],
        [
            '[Phil] "Have you guys ever Girp\'d together?" [Sal] "You mean like a circle Girp?"',
            'Sal',
            'GIRP online multiplayer',
            ''
        ],
        [
            'Hey Chris, wasn\'t "awesome box" your mom\'s name in HS?',
            'Sal',
            'Chris\'s mom is promiscuous',
            ''
        ],
        [
            'Three man programming',
            'Sal / Roger',
            'To annoy the hell out of Chris while he codes',
            ''
        ],
        [
            '(3 weeks later) Oh....Fuk-u-all......I get it!',
            'Bach',
            'Bach finally laughed at Kacie\'s lastname 3 weeks after she told us',
            ''
        ],
        [
            'Don\'t ask, Bach. Just put it in.',
            'Chris',
            'Response when Bach asked if he can add things to this list.',
            ''
        ],
        [
            'Waiting on Vagrant to "Get it Up"',
            'Stephen',
            "Stephen was frustrated with Vagrant's lack of performance",
            ''
        ],
        [
            'I want to punch that guy in the face!',
            'Everyone',
            'Anytime you are one facebook, rackspace.com, twitter.com, or anytime you see Joe.',
            ''
        ],
        [
            "I'm pretty sure I can fit this whole thing in my mouth....",
            'Stephen',
            'Expressing his excitement over a cupcake with meat.',
            ''
        ],
        [
            '(Asked about lunch) "Hold on..... I have to get some medicine for my face!"',
            'Andrew',
            'Seasonal allergies.',
            ''
        ],
        [
            "Isn't SSDeezNuts the name of your yacht?",
            'Andrew',
            "Reaction to Hussam's deez nuts joke",
            ''
        ],
        [
            "Hold on, I don't want my lunchbox...thing...being all smelly.",
            'Andrew',
            'Responding to claims that it was taking too long to wash dirty tupperware after lunch.',
            ''
        ]
    ];

    $scope.deezJokesHeadings = [
        'Setup', 'Punch Line', 'Speaker'
    ];

    $scope.deezJokes = [
        [
            'I have an SSD in this!',
            'SSDeez Nuts!',
            'Hussam'
        ]
    ];
});
