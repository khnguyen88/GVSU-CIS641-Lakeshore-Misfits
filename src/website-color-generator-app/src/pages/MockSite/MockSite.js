import PropTypes from 'prop-types';
import './MockSite.scss';
import { PaletteContext } from '../../context/PaletteContext';
import React, { useContext, useState, useEffect } from 'react';


const MockSite = () => {
  const [palette, setPalette] = useContext(PaletteContext);

  //Work-around to get change colors of pseudo classes
  //https://stackoverflow.com/questions/11371550/change-hover-css-properties-with-javascript
  
  useEffect(() => { 
    const mockNavItems = document.querySelectorAll('.inactive div');

    mockNavItems.forEach((navItem) => {
      navItem.style.setProperty('--nav-item-background-color', `${palette.colors[1]}`);
      navItem.style.setProperty('--nav-item-text-color', `${palette.colors[1].isLight() ? palette.colors[4]: 'white'}`);
    });
  }, [palette]);

  return (
    <div className="MockSite" data-testid="MockSite" style={{ backgroundColor: palette.colors[0] }}>
    <ul className="mock-nav" style={{backgroundColor: palette.colors[4]}}>
      <li className="mock-nav-item active" style={{backgroundColor: palette.colors[2]}}><div href="" style={{color: palette.colors[2].isLight() ? palette.colors[4] : palette.colors[0]}}>Home</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 1</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 2</div></li>
      <li className="mock-nav-item inactive"><div href="">Link 3</div></li>
    </ul> 
    <h1 style={{color: palette.colors[4]}}> Mock Site Page</h1>
     <section>
      <h2 style={{color: palette.colors[3]}}>Sub Header</h2>
      <img src= "https://m.media-amazon.com/images/I/71sgtpB-rxL.jpg" alt="Random Color Generator" width="300" height="300" style={{backgroundColor: palette.colors[0]}}/>
      <p style={{backgroundColor: palette.colors[3], color:palette.colors[3].isLight() ? palette.colors[4]: 'white'}}> Lorem ipsum dolor sit amet. Sed dolore magnam non alias sunt ut quas quia. Sit galisum sapiente et corporis blanditiis id doloribus quidem. Ut aperiam optio ab temporibus tempora est nihil accusantium in quos voluptatibus hic suscipit fuga non nihil velit non neque reiciendis. Eos quia accusantium et explicabo accusamus in expedita consequatur et aliquid magni id saepe omnis ut consectetur quam qui nostrum sint. </p>	
      <p style={{backgroundColor: palette.colors[2], color:palette.colors[2].isLight() ? palette.colors[4]: 'white'}}>Et sint excepturi ut quia quidem ut illo quae. In minus deserunt ab itaque quidem ut internos galisum est tempore repellendus. Et odit quaerat 33 fuga saepe id dolorem veniam hic deserunt ducimus qui repudiandae debitis sed quasi iste id excepturi quos. Nam tempore iusto aut voluptatem nesciunt qui omnis deleniti? In quis labore ut soluta nemo et autem iure eos velit earum. Quo atque dolor qui harum eaque in sequi nisi et voluptas atque vel illum animi. Nam consequatur quibusdam et expedita molestias eos dolore laborum eos consectetur porro!</p>
      <p style={{backgroundColor: palette.colors[3], color:palette.colors[3].isLight() ? palette.colors[4]: 'white'}}>Cum omnis porro et dolorem nobis sed aliquid voluptatum et dolor aspernatur non quis odit non repellat galisum. Aut vitae minus eos placeat quae ut reprehenderit voluptas qui vero exercitationem vel unde cupiditate.  Qui molestiae repudiandae ut voluptates labore qui quos earum sit odio nemo et dignissimos nemo cum harum laborum id alias debitis!Et veniam omnis qui aliquid sunt qui blanditiis earum. </p>
    </section>	
		
  <aside style={{backgroundColor: palette.colors[1]}} >
    <h2 style={{color: palette.colors[4]}}>Section Header</h2>
		<img src= "https://www.gigacalculator.com/img/randomizers/color-wheel-picker.jpg" alt="Random Color Generator"/>
		<p> Ea vero modi aut velit itaque hic iusto necessitatibus est totam dolor. Non corporis iure aut illo dolorem 33 Quis dolorum est nisi distinctio. Et vitae quas est ipsum debitis et ipsa fugit aut quibusdam eaque cum cumque sint id nihil veniam? Et minus sequi vel perferendis nulla hic nihil maxime.</p>
    <button className="button" style={{color: palette.colors[2].isLight() ? palette.colors[4] : palette.colors[0], backgroundColor: palette.colors[2]}}>Test Button</button>
	</aside>
  </div> );
};


MockSite.propTypes = {};

MockSite.defaultProps = {};

export default MockSite;
