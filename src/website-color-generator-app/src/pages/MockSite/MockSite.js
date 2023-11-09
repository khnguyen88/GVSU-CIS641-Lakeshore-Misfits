import React from 'react';
import PropTypes from 'prop-types';
import './MockSite.scss';

const MockSite = () => (
  <div className="MockSite" data-testid="MockSite">
    <h1> Mock Site Page</h1>
     <section>
      <h2>Title 1</h2>
      <img src= "https://m.media-amazon.com/images/I/71sgtpB-rxL.jpg" alt="Random Color Generator" width="300" height="300"/>
      <p> Lorem ipsum dolor sit amet. Sed dolore magnam non alias sunt ut quas quia. Sit galisum sapiente et corporis blanditiis id doloribus quidem. Ut aperiam optio ab temporibus tempora est nihil accusantium in quos voluptatibus hic suscipit fuga non nihil velit non neque reiciendis. Eos quia accusantium et explicabo accusamus in expedita consequatur et aliquid magni id saepe omnis ut consectetur quam qui nostrum sint. </p>	
      <p>Et sint excepturi ut quia quidem ut illo quae. In minus deserunt ab itaque quidem ut internos galisum est tempore repellendus. Et odit quaerat 33 fuga saepe id dolorem veniam hic deserunt ducimus qui repudiandae debitis sed quasi iste id excepturi quos. Nam tempore iusto aut voluptatem nesciunt qui omnis deleniti? In quis labore ut soluta nemo et autem iure eos velit earum. Quo atque dolor qui harum eaque in sequi nisi et voluptas atque vel illum animi. Nam consequatur quibusdam et expedita molestias eos dolore laborum eos consectetur porro!</p>
      <p>Cum omnis porro et dolorem nobis sed aliquid voluptatum et dolor aspernatur non quis odit non repellat galisum. Aut vitae minus eos placeat quae ut reprehenderit voluptas qui vero exercitationem vel unde cupiditate.  Qui molestiae repudiandae ut voluptates labore qui quos earum sit odio nemo et dignissimos nemo cum harum laborum id alias debitis!Et veniam omnis qui aliquid sunt qui blanditiis earum. </p>
    </section>	
		
  <aside>
    <h2>Aside Title</h2>
		<img src= "https://www.gigacalculator.com/img/randomizers/color-wheel-picker.jpg" alt="Random Color Generator"/>
		<p> Ea vero modi aut velit itaque hic iusto necessitatibus est totam dolor. Non corporis iure aut illo dolorem 33 Quis dolorum est nisi distinctio. Et vitae quas est ipsum debitis et ipsa fugit aut quibusdam eaque cum cumque sint id nihil veniam? Et minus sequi vel perferendis nulla hic nihil maxime.</p>
    <button className="button">Test Button</button>
	</aside>
  </div>
);

MockSite.propTypes = {};

MockSite.defaultProps = {};

export default MockSite;
