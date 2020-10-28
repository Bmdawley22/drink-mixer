// import React
import React from 'react';

// function base
const Article = () => {
    return(
        <div className='homepageCard'>
            <h1>Mixology 101</h1>
            <h1>The Science of Cocktail Making</h1>
            <h4>Last modified: 22 June 2019</h4>
            <img className='articleImg' src='https://static.bartendersbusiness.com/en/articles/images/w/800/BartendersBusiness-07222019053646000000-5d354b6e83195.jpg' alt='Cocktail Making' />
            <p>Cocktail making might seem mixing a vodka and tonic, but it's much more than that.</p>
            <p>Cocktail making is known to be a science, and not just because of its magical powers to 
                uplift moods all over. A good cocktail, when mixed well with the right amount of concoction 
                and ice, can be the ultimate crowd-pleaser. However, you might lose a bit of clout if your 
                cocktail isn’t made the right way.</p>
            <a className='articleLink' href='https://bartendersbusiness.com/en/articles/menu-intel-1/the-science-of-cocktail-making-77.htm' targer='_blank'>Continue Reading</a>
        </div>
    )
}

// export Article
export default Article;