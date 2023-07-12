import anime from "animejs";

export const indexTransition = ({
    name: 'index',
    mode: 'out-in',
    onLeave: (el,done) => {
            let rows = Math.floor(document.body.clientHeight / 50),
                cols = Math.floor(document.body.clientWidth / 50)
                console.log(rows,cols)
        anime.timeline({
            // duration:2500,
            complete:()=> done(),
        }).add({
            targets: el,
            easing: 'linear',
            opacity: 0,
            translateZ: -1,
            duration: 1500,
        }).add({
            targets:'#loader',
            opacity:1,
            duration: 1
        },0).add({
            targets: '#loader .box',
            opacity: [0, 1],
            scale: [.1, 1],
            easing: 'easeInQuad',
            delay: anime.stagger(200,{grid:[rows,cols], from:'center'})
        },0)
    },
    onAfterLeave: () => {
        anime.timeline()
        .add({
            targets:'#loader',
            backgroundColor: 'none',
        })
        .add({
            targets: '#loader .box',
            opacity: [1, .1],
            scale: [
                {value: .1, easing: 'easeOutSine', duration: 500},
                {value: 1, easing: 'easeInOutQuad', duration: 1200}
            ],
            background:'#00000',
            easing:'linear',
            // duration:3000,
        }).add({
            targets: '#loader',
            opacity: [1,0],
            duration:100,
            easing:'linear'
        })
    } 
})

export default indexTransition