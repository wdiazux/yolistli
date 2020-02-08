import { Theme, createStyles } from '@material-ui/core/styles'

const shapeCommon = {
    position: 'absolute !important' as 'absolute',
    overflow: 'visible!important',
    zIndex: -1,
}

const heroShapesStyle = (theme: Theme) =>
    createStyles({
        '@keyframes movebounce': {
            '0%': {
                transform: 'translateY(0px)',
            },
            '50%': {
                transform: 'translateY(20px)',
            },
            '100%': {
                transform: 'translateY(0px)',
            },
        },
        '@keyframes animationFramesOne': {
            '0%': {
                transform: 'translate(0px,0px) rotate(0deg)',
            },
            '20%': {
                transform: 'translate(73px,-1px) rotate(36deg)',
            },
            '40%': {
                transform: 'translate(141px,72px)  rotate(72deg)',
            },
            '60%': {
                transform: 'translate(83px,122px)  rotate(108deg)',
            },
            '80%': {
                transform: 'translate(-40px,72px)  rotate(144deg)',
            },
            '100%': {
                transform: 'translate(0px,0px)  rotate(0deg)',
            },
        },
        '@keyframes rotateme': {
            from: {
                transform: 'rotate(0deg)',
            },
            to: {
                transform: 'rotate(360deg)',
            },
        },
        '@keyframes rotate3d': {
            '0%': {
                transform: 'rotateY(0deg)',
            },
            '100%': {
                transform: 'rotateY(360deg)',
            },
        },
        shapeOne: {
            ...shapeCommon,
            width: '51px',
            height: '59px',
            top: '17%',
            left: '7%',
            opacity: 0.4,
            '& > picture > img': {
                animationName: '$movebounce',
                animationDuration: '5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeTwo: {
            ...shapeCommon,
            width: '180px',
            height: '178px',
            bottom: '-5%',
            left: '0',
        },
        shapeThree: {
            ...shapeCommon,
            width: '78px',
            height: '89px',
            bottom: '0',
            right: '20%',
            opacity: 0.5,
            '& > picture > img': {
                animationName: '$movebounce',
                animationDuration: '10s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeFour: {
            ...shapeCommon,
            width: '6px',
            height: '6px',
            bottom: '26%',
            left: '45%',
            '& > picture > img': {
                animationName: '$animationFramesOne',
                animationDuration: '20s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeFive: {
            ...shapeCommon,
            width: '26px',
            height: '26px',
            bottom: '15%',
            left: '40%',
            opacity: 0.5,
            '& > picture > img': {
                animationName: '$movebounce',
                animationDuration: '5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeSix: {
            ...shapeCommon,
            width: '115px',
            height: '106px',
            bottom: '15%',
            right: '0',
            opacity: 0.5,
            '& > picture > img': {
                animationName: '$movebounce',
                animationDuration: '8s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeSeven: {
            ...shapeCommon,
            width: '82px',
            height: '82px',
            top: '50%',
            left: '5%',
            opacity: 0.3,
            '& > picture > img': {
                animationName: '$rotate3d',
                animationDuration: '4s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        shapeEight: {
            ...shapeCommon,
            width: '22px',
            height: '22px',
            bottom: '60px',
            left: '25%',
            '& > picture > img': {
                animationName: '$rotateme',
                animationDuration: '20s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            },
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
    })

export default heroShapesStyle
