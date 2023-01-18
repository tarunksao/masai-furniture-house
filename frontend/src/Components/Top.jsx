import React from 'react'
import "./Top.css";
import Filter from './Filter';
import { Box, Button, } from "@chakra-ui/react";

import axios from 'axios'
import { ProductPage } from './Product';
const Top = () => {


    return (
        <Box width="fit-content">
            <div className='top'>
                <p>Products</p>
                <p>furniture</p>
                <p>Gaming furniture</p>
            </div>
            {/* ................................. */}
            <div className='heading' style={{ color: "black" }}>
                <h1>Gaming furniture</h1>
            </div>

            {/* .......................................... */}
            <div className='vn-8-grid'>
                <div>
                    <img className='img' src='https://www.ikea.com/global/assets/navigation/images/gaming-desk-chair-sets-56516.jpeg?imwidth=400' />
                    <div className='vn__nav__title'><p>Desk for Gaming</p></div>
                </div>
                <div>
                    <img className='img' src='https://www.ikea.com/global/assets/navigation/images/gaming-desk-chair-sets-56516.jpeg?imwidth=400' />
                    <div className='vn__nav__title'><p>Gaming Chairs</p></div>
                </div>
                <div>
                    <img className='img' src='https://www.ikea.com/global/assets/navigation/images/gaming-desk-chair-sets-56516.jpeg?imwidth=400' />
                    <div className='vn__nav__title'><p>Gaming accesories</p></div>
                </div>
                <div>
                    <img className='img' src='https://www.ikea.com/global/assets/navigation/images/gaming-desk-chair-sets-56516.jpeg?imwidth=400' />
                    <div className='vn__nav__title'><p>Gaming desk and chairs sets</p></div>
                </div>
            </div>
            {/* ........................ */}
            <div>
                <h2 className='heading-ls'>
                    Gaming setups that support you while you conquer alternate worlds
                </h2>
                <p className='para-ls'>
                    The best gaming chair helps you forget where you are seated. Our gaming chairs keep you so well supported that you can immerse yourself in gameplay for long hours without feeling any discomfort. Our gaming desks comfortably house all your equipment while also being comfortable to use.
                </p>
            </div>

            {/* filter and map should be here */}
            <Filter />
            <ProductPage />
            {/* ............... */}
            <div>
                <h2 className='heading-ls'>
                    Gaming chairs for optimal performance and maximum style
                </h2>
                <p className='para-ls'>
                    Whether you need a chair for your gaming station or your study spot, a gaming chair is a fantastic choice. Ergonomic and comfortable, our gaming chairs come in different styles too.
                </p>
            </div>
            <div className='image'>
                <div>
                    <img className="image-ls" src='https://www.ikea.com/ext/ingkadam/m/36955414c7346152/original/PH187076.jpg?f=xl' alt="" />
                </div>
                <div className='grid'>
                    <div>
                        <img className="image1" src='https://www.ikea.com/ext/ingkadam/m/7a7b9d36336ae261/original/PH187062-crop001.jpg?f=xs' alt="" /></div>
                    <div>
                        <img className="image2" src='https://www.ikea.com/ext/ingkadam/m/5c78a88c7428549d/original/PH187594.jpg?f=xs' alt="" /></div>
                </div>
                <div className='grid1'>
                    <div>
                        <img className="image3" src='https://www.ikea.com/ext/ingkadam/m/431f65e975caf083/original/PH188170.jpg?f=xs' alt="" /></div>
                    <div>
                        <img className="image4" src='https://www.ikea.com/ext/ingkadam/m/27297d75d106222c/original/PH183443-crop001.jpg?f=xs' alt="" /></div>
                </div>
            </div>
            <div className='image2-ls'>
                <div className='flex'>
                    <img src='https://www.ikea.com/images/a-young-man-with-headphones-on-and-his-hands-up-in-the-air-s-1a162c52599a5317e2644bd34fa28ff9.jpg?f=xxl' /></div>
                <div className='flex1'>
                    <div className='flex3'>
                        <h3 className='h3'>Level up with the right gaming furniture</h3>
                        <p className='p'>The IKEA gaming range keeps growing. Meet the newest player – STYRSPEL gaming chair.</p>
                        <Button className='btn'>See STRYSPEL gaming chair</Button>
                    </div>
                </div>
            </div>


            <div className='image2-ls' style={{ marginTop: "70px" }}>
                <div className='flex'>
                    <img style={{ width: "100%" }} src='https://www.ikea.com/images/a-black-utespelare-gaming-desk-with-two-screens-a-black-gami-c25dc7ada0e79652e40a31ff9616a0e0.jpg?f=l' /></div>
                <div className='flex1' style={{ backgroundColor: "#B2A7A5" }}>
                    <div className='flex3'>
                        <h3 className='h3' style={{ color: "black" }}>Getting your gaming solution just right</h3>
                        <p className='p' style={{ color: "black" }}>Your gaming desk is somewhere you will spend long hours, so it’s important to get the comfort, ergonomics and functionality you need. And of course, the right extras can also help make things more enjoyable.</p>
                        <Button className='btn' style={{ backgroundColor: "black", color: "white" }}>See more about gaming solutions</Button>
                    </div>
                </div>
            </div>
            {/* .............................. */}
            <div style={{ marginTop: "50px" }}>
                <h2 className='heading-ls'>
                    All the gaming accessories you need and more
                </h2>
                <p className='para-ls' style={{ marginTop: "-5px" }}>
                    A wide gaming mouse pad for stability, a ring light with phone holder to get that glow, and an accessories stand to lend a helping hand. All these gaming accessories (and more) make for a smoother and more fun gaming experience.
                </p>
            </div>
            {/* ...... */}
            <div className='image3-ls'>
                <div>
                    <img src="https://www.ikea.com/ext/ingkadam/m/7eb82785fa6d1e48/original/PH187595.jpg?f=xl" alt="" /></div>
                <div>
                    <img src="https://www.ikea.com/ext/ingkadam/m/33bd7dc8b58bafe/original/PH180750.jpg?f=xl" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "90px" }}>
                <h2 className='heading-ls'>
                    Perfect support for tireless play
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Your gaming experience will be more enjoyable if you can sit and play in comfort. Gaming chairs support your entire body whether you are in an upright or reclined position. Gaming furniture is essential to prevent pain and health issues caused by long hours in a seated position. We have designed our gaming furniture with a lot of inputs from experienced gamers. A gaming chair should offer good support for the arms, neck and spine. The ergonomically designed gaming chairs keep your spine aligned and well supported. They also support and position your neck and wrists optimally. Mix and match from our selection of gaming desks and chairs or buy a pre-matched set. When you buy a gaming desk and chair as a set, you can be sure that they will work well together. Gaming in comfort helps you better focus and enjoy your game without posture or health issues.
                </p>
            </div>
            {/* ............. */}
            <div style={{ marginTop: "140px" }}>
                <h2 className='heading-ls'>
                    Great support for your back
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Gaming chairs are essential for gamers who spend long hours sitting. Our gaming chairs keep your back properly aligned and prevent hunching forward. A high backrest, neck pillow and adjustable lumbar support provide the maximum back support. Adjustable lumbar support is essential to maintain the right spine curvature. You can use a neck pillow to give your neck all around support and to prevent you from holding your neck at an odd angle when playing.  Pick a neck pillow that has a skin friendly cover and can be laundered regularly.
                </p>
            </div>
            {/* .................. */}
            <div style={{ marginTop: "70px" }}>
                <h2 className='heading-ls'>
                    Synchronised tilt for better posture
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Most office chairs have tilt-adjustable backs that allow you to tilt the backrest. But, a good gaming chair should also have a synchronised tilt feature. This means that when you move the backrest backwards, the seat also gets tilted back. Our gaming chairs with a synchronised tilt move the seat and the backrest together to stabilise your posture in all tilt positions. This prevents tiredness and pain that would result from an improper tilt posture.
                </p>
            </div>
            {/* ..................... */}
            <div style={{ marginTop: "50px" }}>
                <h2 className='heading-ls'>
                    Gaming chairs for smaller spaces
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Gaming chairs, by definition, are taller and more substantial than smaller office chairs. If you have a smaller space, choose a gaming chair with a mesh back. A mesh chair will provide you back support while also being visually lighter.
                </p>
            </div>
            {/* ..................... */}
            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    Choice of material
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Gaming chairs are available in a choice of leather-like and mesh finishing materials. Pick a leather-like material if you want to emphasise the sporty gaming look of your space. The leather-like material is easy to maintain and wipe clean. A mesh chair will encourage more air circulation and keep you cooler in hot climates.
                </p>
            </div>
            {/* ..................... */}
            <div style={{ marginTop: "30px" }}>
                <h2 className='heading-ls'>
                    The ultimate gaming desk
                </h2>
                <p className='para-ls' style={{ marginTop: "-1px" }}>
                    Gaming requires more equipment than your standard office PC. Gaming desks should be spacious and deep. Choose a gaming desk with enough room for your equipment. The desk depth helps place the monitor at a healthy distance away from your eyes. Choose a gaming desk that is large enough to accommodate your monitor or TV screen. Our gaming desks feature a contoured tabletop that supports your wrists and forearms. High side panels block sunlight to prevent glare on your gaming screens. Cup holders keep your snacks and beverages handy when you need to refuel while playing. Cable management solutions are essential for tangle-free and tidy cables. Pegs or drawers to store headphones and charging cables are also necessary to keep these items handy but out of the way.
                </p>
            </div>
        </Box>
    )
}

export default Top