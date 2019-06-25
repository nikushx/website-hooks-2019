import getHelpScreenResponse from './helpScreenResponse';

import CodeSaladYTImg from '../images/codesalad-yt.png';
import CodeSaladRotateImg from '../images/codesalad-rotate.png';

// employment images
import ProofpointImg from '../images/employment/proofpoint.png';
import FGImg from '../images/employment/fg.png';
import HoneywellImg from '../images/employment/honeywell.png';
import CalypsoImg from '../images/employment/calypso.png';
import ResponsivalImg from '../images/employment/responsival.png';
import SemioImg from '../images/employment/semio.png';
import CodecademyImg from '../images/employment/codecademy.png';

// project images
import DeepaImg from '../images/projects/deepa.png';
import MyHealthImg from '../images/projects/myhealth.png';
import LipsiteImg from '../images/projects/lipsense.png';
import CoursehubImg from '../images/projects/coursehub.png';
import LaptopsImg from '../images/projects/laptops4college.png';

// contact icons
import {
	faLinkedin,
	faGithub,
	faTwitter,
	faApple,
} from '@fortawesome/free-brands-svg-icons';

import NikushCartoonImg from '../images/me.png';

import { initialLog } from './store';
import { faMailBulk, faLeaf, faHeart, faGamepad } from '@fortawesome/free-solid-svg-icons';

export const determineResponse = (log, command) => {
	const modifiedLog = log;

	modifiedLog.push({
		type: 'text',
		text: `nikushx$ ${command}`,
		color: '#828282',
	});

	switch (command) {
		case 'sai':
			modifiedLog.push({
				type: 'icontext',
				icon: faGamepad,
				text: `cod shots`
			});
			break;
		case 'darien':
			modifiedLog.push({
				type: 'icontext',
				icon: faHeart,
				text: `i love you`
			});
			break;
		case 'amulia':
			modifiedLog.push({
				type: 'icontext',
				icon: faApple,
				text: `whats up dude - click here`,
				link: 'http://3greensmarket.com/'
			});
			break;
		case 'brandon':
			modifiedLog.push({
				type: 'icontext',
				icon: faLeaf,
				text: `sup neighbor`
			});
			break;
		case 'story':
		case 'nikush':
		case 'about':
		case 'about me':
		case 'me':
			modifiedLog.push({
				type: 'image-story',
				imageSrc: NikushCartoonImg,
				heading: 'About Nikush',
				text: `Thanks for visiting my portfolio website!<br/>\
						I am a software developer focusing in web development.<br/>\
						Currently, I work at Proofpoint (formerly Wombat Security Technologies) in Pittsburgh, PA.<br/><br/>\

						In general, love coding, music, technology, being outdoors, and a lot more.<br/>
						Recently, my focuses have been in coding in React, Typescript, Node, and related frameworks.<br/>
						Music is essentially a hobby of mine, and I like all kinds of music, a lot of hip hop, indie, some EDM, even some pop, etc.<br/>
						I live the mental space around the convergence of technology, creativity, and entrepreneurship.<br/>
						<br/>
						I am a self taught developer, always striving to keep learning.<br/>
						I created the <a href="http://www.nikushx.com/blog" style="color: cyan">blog and YouTube channel <strong>CodeSalad</strong></a> to document my web dev journey and teach what I have learned.<br/>\
						<br/>
						Feel free to reach out to me, I'm pretty friendly.<br/>
						(hint: type 'contact')<br/><br/>\
						- Nikush`,
			});
			break;
		case 'chat':
		case 'message':
		case 'facebook':
		case 'twitter':
		case 'phone':
		case 'contact me':
		case 'email':
		case 'github':
		case 'linkedin':
		case 'contact':
			modifiedLog.push(
				...[
					{
						type: 'icontext',
						icon: faGithub,
						text: 'Github',
						link: 'https://github.com/nikushx',
					},
					{
						type: 'icontext',
						icon: faTwitter,
						text: 'Twitter',
						link: 'https://twitter.com/nikushd',
					},
					{
						type: 'icontext',
						icon: faLinkedin,
						text: 'LinkedIn',
						link:
							'https://www.linkedin.com/in/nikush-dalia-a40280108/',
					},
					{
						type: 'icontext',
						icon: faMailBulk,
						text: 'nikushdalia@gmail.com',
						link: 'mailto:nikushdalia@gmail.com',
					},
				]
			);
			break;
		case 'jobs':
		case 'job':
		case 'experience':
		case 'work':
		case 'employment':
		case 'proofpoint':
		case 'pfpt':
		case 'semio':
		case 'semio.ai':
		case 'frazier':
		case 'frazier garments':
		case 'frzr':
		case 'calypso':
		case 'codecademy':
		case 'visionary machines':
		case 'responsival':
			modifiedLog.push({
				type: 'jobs',
			});
			break;
		case 'projects':
		case 'project':
		case 'deepa':
		case 'side projects':
		case 'side project':
		case 'lipsite':
		case 'coursehub':
		case 'laptops4college':
		case 'myhealth':
			modifiedLog.push({
				type: 'projects',
			});
			break;
		case 'video':
		case 'videos':
		case 'codesalad yt':
		case 'codesalad youtube':
		case 'youtube':
			modifiedLog.push({
				type: 'imagetext',
				title: 'Opening YouTube (CodeSalad)...',
				imageSrc: CodeSaladYTImg,
				text: 'Coding YouTube Channel',
				redirect: 'https://www.youtube.com/user/NIKUSHx',
			});
			break;
		case 'codesalad':
		case 'blog':
			modifiedLog.push({
				type: 'imagetext',
				title: 'Opening CodeSalad...',
				imageSrc: CodeSaladRotateImg,
				text: 'Personal Blog by Nikush Dalia',
				rotate: true,
				redirect: 'http://www.nikushx.com/blog',
			});
			break;
		case 'help':
			modifiedLog.push(...getHelpScreenResponse());
			break;
		case 'clear':
		case 'cls':
		case 'reset':
			while (modifiedLog.length > initialLog.length) {
				modifiedLog.pop();
			}
			break;
		default:
			modifiedLog.push({
				type: 'text',
				text: `Command "${command}" not recognized.`,
				color: 'red',
			});
	}

	return modifiedLog;
};

export const jobs = {
	proofpoint: {
		imageSrc: ProofpointImg,
		title: 'Proofpoint',
		position: 'Front End Developer',
		dates: '2018 (Current)',
		location: 'Pittsburgh, PA',
		text: `Developed extensive training framework for learning cybersecurity essentials.\
			Worked with modern Javascript libraries to create a responsive, multilingual, accessible platform\
			with customizable modules and a suite of customization tools \
			to personalize modules. Worked with state-of-the-art systems such as \
			React, Docker, MongoDB, RabbitMQ to create and deploy production training modules and customization frameworks.`,
	},
	frazier: {
		imageSrc: FGImg,
		title: `Frazier Garments`,
		position: `CEO, Owner, Sole Developer`,
		dates: '2016-2018 (Current)',
		location: 'Pittsburgh, PA',
		text: `Started, directed, and developed a clothing brand, focusing on bringing out undiscovered art talents in \
			the Pittsburgh community. Dealt with every aspect of the business from creating the website, \
			handling clothing bulk orders, customer sales, marketing, design ideation, and raising money.`,
	},
	semio: {
		imageSrc: SemioImg,
		title: `Semio.AI`,
		position: `Software Engineering`,
		dates: 'Summer 2018',
		location: 'Remote',
		text: `Designed and developed React/Redux scalable web applications \
			in conjunction with Typescript for robotics development. \
			Worked closely with CTO remotely to create full-stack applications \
			to add to a software suite used to create functions and applications \
			for robots and IoT devices. Created WebSocket servers and 3D robot configuration \
			tools to integrate into the software suite.`,
	},
	calypso: {
		imageSrc: CalypsoImg,
		title: `Visionary Machines Inc.`,
		position: `Software Engineer`,
		dates: '2017-2018',
		location: 'Remote',
		text: `Contracted to develop features for a robotics automation \
			software built in Javascript for children to learn robotics concepts \
			while creating programs for the Cozmo social robot. Rewrote poorly written \
			software to match Google Javascript Code Standards. Worked with a Pixi.js graphical \
			interface to simulate robot behavior.`,
	},
	responsival: {
		imageSrc: ResponsivalImg,
		title: `Responsival`,
		position: `CTO & Lead Developer`,
		dates: '2017-2018',
		location: 'Pittsburgh, PA',
		text: `Designed and developed hundreds of e-commerce websites \
			for both enterprise and local clients (i.e. ION360.com, GardenTowerProject.com, many more). \
			Developed Shopify themes and worked heavily with jQuery, other JavaScript libraries/plug-ins \
			to turn mockups into fully responsive e-commerce websites to meet and exceed client needs.`,
	},
	honeywell: {
		imageSrc: HoneywellImg,
		title: `Honeywell`,
		position: `Voice Recognition ML Intern`,
		dates: '2016-2017',
		location: 'Pittsburgh, PA',
		text: `Vocollect Division. Developed speech recognition processes based on machine learning concepts at Vocollect, a recently \
			acquired Honeywell subsidiary, in Perl & C++. Designed software to optimize speech recognition \
			detection and develop robust neural networks through running experiments on the trained neural \
			networks. Tested high-performance GPU’s for neural network training.`,
	},
	codecademy: {
		imageSrc: CodecademyImg,
		title: `Codecademy`,
		position: `Pro Advisor`,
		dates: '2016-2017',
		location: 'Remote',
		text: `Advised and tutored aspiring developers on the Codecademy Pro program as an on-demand adviser. \
			Aided students along their path to completing Codecademy’s extensive coding boot camp in a multitude \
			of languages including AngularJS, Java, Python, Javascript, HTML/CSS, PHP, etc.`,
	},
};

export const projects = {
	deepa: {
		imageSrc: DeepaImg,
		title: 'Nutritionist Deepa',
		subtitle: 'Shopify Custom Development',
		linkHref: 'http://www.nutritionistdeepa.com/',
		dates: '2018',
		status: 'Launched, still maintaining this project',
		text: `Built custom Shopify website for Nutritionist Deepa's Lentil Krispies superfood product.\
			   Consulted for their COO on how to manage the developer (me) and graphic designer in a seamless fashion to release a production e-commerce website.`,
	},
	myhealth: {
		imageSrc: MyHealthImg,
		title: 'My Health',
		subtitle: "UPMC Children's Hospital Hackathon",
		linkHref: 'https://devpost.com/software/my-health-wj5bu7',
		dates: '2018',
		status: 'Finished',
		text: `Mentored and led development with two CS students at Carnegie Mellon in creating a React web application for the Hack This Help Kids hackathon.\
				The prototype was a fully functional personal medical record database where patients can take control of their medical data by owning a personal copy of the records that are currently being stored in hospital databases.\
				Built with React, Redux, Typescript.`,
	},
	lipsite: {
		imageSrc: LipsiteImg,
		title: 'Lipsite',
		subtitle: 'Complete Distributor Platform for MLM Vendors',
		linkHref: 'http://thelipsite.com/',
		dates: '2016-2018',
		status: 'Launched in 2016, and up for sale in 2018.',
		text: `Built a WordPress MultiSite ecosystem for distributors of Senegence Lipsense products.\
				The platform provided each distributor with a personal website that allows their customers to browse their inventory, chat with them about products, and place orders.\
				There were many additional features such as custom blogs, pages, and total control over customization.`,
	},
	coursehub: {
		imageSrc: CoursehubImg,
		title: 'Coursehub',
		subtitle: 'Blast Furnace Startup Accelerator',
		linkHref: 'https://www.innovation.pitt.edu/blast-furnace-cohort5/',
		dates: '2016-2017',
		status: 'Finished',
		text: `Coursehub was apart of the Blast Furnace Student Startup Accelerator Program at the University of Pittsburgh.\
				Coursehub is a platform for student-to-student communication for students enrolled in university where students can discuss course material with their peers.`,
	},
	laptops4college: {
		imageSrc: LaptopsImg,
		title: 'Laptops4College',
		subtitle: 'Affiliate Marketing',
		linkHref: 'http://www.laptops4college.com/',
		dates: '2014-2018',
		status: 'Abandoned',
		text: `This was my first ever entrepreneurial endeavor.\
				I saw a need for a website that caters laptop searches specifically for college students, so I created this website to help other college students find laptops.\
				This is an affiliate marketing website that generates revenue off of the Amazon Associates program.\
				I employed freelancers around the world to help write articles for the blog.`,
	},
};
