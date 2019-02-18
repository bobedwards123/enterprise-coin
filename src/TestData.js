export const menuItems = [
    {url: '/', name: 'Home'},
    {url: '/about', name: 'About'},
    {url: '/projects', name: 'Projects'},
    {url: '/create/project', name: 'Create Project'},

    {url: '/users', name: 'Users'},
    {url: '/analytics', name: 'Analytics'}
]

const projectNum = 100;

const noUsers = 500;



const createProjects = (num)=>{
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push({
            id: Math.round(Math.random() * 100000),
            name: 'lost paradise', 
            description: 'a description',
            image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',

            date: '12/2/2018',
            supporters: [
                {
                    name: 'james'
                },
                {
                    name: 'jess'
                },
                {
                    name: 'bob'
                }
            ],
            goal: Math.round((Math.random() * 1000)),
            funded: Math.round((Math.random() * 1000)),
            video: 'TQL7Ne8rY'
        })
    }
    return arr;
}


export const projectData = createProjects(projectNum)


export const projectDatas = [
    {
        _id: '123231asdkjhkjh23123',

        name: 'bad project',
        description: 'a shit project',
        image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',
        date: '12/2/2018',
        supporters: [
            {
                name: 'james'
            },
            {
                name: 'jess'
            },
            {
                name: 'bob'
            }
        ],
        goal: 100,
        funded: 8,
        video: 'TQL7Ne8rY'
    },
    {
        _id: '1232312aasd3123',

        name: 'Booster Board',
        description: 'Best boards around',
        image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',
        date: '12/2/2018',
        supporters: [
            {
                name: 'james'
            },
            {
                name: 'jess'
            },
            {
                name: 'bob'
            }
        ],
        goal: 1000,
        funded: 2000,
        video: 'IWV8irg64oM'
    },
    {
        _id: '12323123123',
        name: 'test project',
        description: 'a great project',
        image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',
        date: '12/2/2018',
        supporters: [
            {
                name: 'james'
            },
            {
                name: 'jess'
            },
            {
                name: 'bob'
            }
        ],
        goal: 1000,
        funded: 50,
        video: 'yOGevLnJS7I'
    },
    {
        _id: '123231231asd23',

        name: 'test project',
        description: 'a great project',
        image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',
        date: '12/2/2018',
        supporters: [
            {
                name: 'james'
            },
            {
                name: 'jess'
            },
            {
                name: 'bob'
            }
        ],
        goal: 1000,
        funded: 500,
        video : 'rmVz9dsMWNU'
    },
    {
        _id: '123231asdasd23123',

        name: 'test project',
        description: 'a great project',
        image: 'https://lostparadise.com.au/wp-content/uploads/2018/08/kartent-805x427.jpg',
        date: '12/2/2018',
        supporters: [
            {
                name: 'james'
            },
            {
                name: 'jess'
            },
            {
                name: 'bob'
            }
        ],
        goal: 1000,
        funded: 5000,
        video: 'TQL7Ne8rY'
    }
   
]



const letters = 'abcdefghijklmnopqurstuvwxyz';

const checkGender = (input)=> {
    if (input > .5){
        return 'Male'
    } else {
        return 'Female'
    }
}

const getAvatar = (input)=>{
    let user;

    if(input > .2 && input < .5){
        user = 'lena'
    } else if (input > .51 && input < .7){
        user = 'matthew'
    } else if (input > .71 && input < .9) {
        user = 'mark'
    } else {
        user = 'lindsay'
    }
    const base = `https://react.semantic-ui.com/images/avatar/small/${user}.png`

    return base
}

const getName = (input)=>{
    let user;

    if(input > .2 && input < .5){
        user = 'lena'
    } else if (input > .51 && input < .7){
        user = 'matthew'
    } else if (input > .71 && input < .9) {
        user = 'mark'
    } else {
        user = 'lindsay'
    }

    return user
}

const getTokens = ()=>{
    return Math.round(Math.random() * 10) 
}

export const createUsers = (noUsers, bounds)=>{
    let arr = []
    for(let i = 0; i < noUsers; i++){
        arr.push({
            _id: Math.round(Math.random() * 100000),
            name: getName(Math.random()), 
            age: Math.round(Math.random() * 10), 
            gender: checkGender(Math.random()),
            avatar: getAvatar(Math.random()),
            tokens: getTokens(Math.random)
        })
    }
    return arr;

}






export const userData = createUsers(noUsers, letters)



export const AboutText = ()=>{
    return [
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
        link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
        ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
        Curabitur ullamcorper ultricies nisi.`,
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
        link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
        ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
        Curabitur ullamcorper ultricies nisi.`

    ]
}