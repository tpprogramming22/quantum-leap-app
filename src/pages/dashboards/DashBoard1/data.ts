// types
import { Message, ProjectDetail } from './types';

// images
import avatar1 from '../../../assets/images/users/user-1.jpg';
import avatar2 from '../../../assets/images/users/user-2.jpg';
import avatar3 from '../../../assets/images/users/user-3.jpg';
import avatar4 from '../../../assets/images/users/user-4.jpg';
import avatar5 from '../../../assets/images/users/user-5.jpg';

const messages: Message[] = [
    // {
    //     id: 1,
    //     avatar: avatar1,
    //     sender: 'Dr Pete',
    //     text: "Your latest results show...",
    //     time: '13:40 PM',
    // },
    {
        id: 2,
        avatar: avatar2,
        sender: 'Dr Jones',
        text: "Hi! Your latest results show...",
        time: '13:34 PM',
    },
    // {
    //     id: 3,
    //     avatar: avatar3,
    //     sender: 'Stillnotdavid',
    //     text: 'This theme is awesome!',
    //     time: '13:17 PM',
    // },
    // {
    //     id: 4,
    //     avatar: avatar4,
    //     sender: 'Kurafire',
    //     text: 'Nice to meet you',
    //     time: '12:20 PM',
    // },
    // {
    //     id: 5,
    //     avatar: avatar5,
    //     sender: 'Shahedk',
    //     text: "Hey! there I'm available...",
    //     time: '10:15 PM',
    // },
];

const projectDetails: ProjectDetail[] = [
    {
        id: 1,
        name: 'Today',
        startDate: 'Blood Check',
        dueDate: '6.105 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 2,
        name: '08/07/2023',
        startDate: 'Blood Check',
        dueDate: '7.104 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 3,
        name: '06/08/2023',
        startDate: 'Blood Check',
        dueDate: '4.109 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 4,
        name: '05/08/2023',
        startDate: 'Blood Check',
        dueDate: '6.108 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 5,
        name: '04/08/2023',
        startDate: 'Blood Check',
        dueDate: '8.107 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 6,
        name: '03/08/2023',
        startDate: 'Blood Check',
        dueDate: '5.106 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 7,
        name: '02/08/2023',
        startDate: 'Blood Check',
        dueDate: '4.105 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    {
        id: 8,
        name: '01/08/2023',
        startDate: 'Blood Check',
        dueDate: '7.104 mmol/L',
        status: '',
        variant: '',
        clients: '',
    },
    // {
    //     id: 2,
    //     name: 'Adminto Frontend v1',
    //     startDate: '01/01/2017',
    //     dueDate: '26/04/2017',
    //     status: 'Released',
    //     variant: 'success',
    //     clients: 'Adminto admin',
    // },
    // {
    //     id: 3,
    //     name: 'Adminto Admin v1.1',
    //     startDate: '01/05/2017',
    //     dueDate: '10/05/2017',
    //     status: 'Pending',
    //     variant: 'pink',
    //     clients: 'Coderthemes',
    // },
    // {
    //     id: 4,
    //     name: 'Adminto Frontend v1.1',
    //     startDate: '01/01/2017',
    //     dueDate: '31/05/2017',
    //     status: 'Work in Progress',
    //     variant: 'purple',
    //     clients: 'Adminto admin',
    // },
    // {
    //     id: 5,
    //     name: 'Adminto Admin v1.3',
    //     startDate: '01/01/2017',
    //     dueDate: '31/05/2017',
    //     status: 'Coming soon',
    //     variant: 'warning',
    //     clients: 'Coderthemes',
    // },
    // {
    //     id: 6,
    //     name: 'Adminto Admin v1.3',
    //     startDate: '01/01/2017',
    //     dueDate: '31/05/2017',
    //     status: 'Coming soon',
    //     variant: 'blue',
    //     clients: 'Adminto admin',
    // },
];

export { messages, projectDetails };
