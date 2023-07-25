import React from 'react';
import './style.scss'
import spacePerson from '../../assets/images/space-person.gif'
import {NavLink} from "react-router-dom";

const MyComponent = () => {
    return (
        <div className='P-trip'>
            <div className='P-trip-wrapper G-container G-flex G-justify-between G-align-center'>
                <div className="P-trip-child">
                    <div className='P-trip-space-person' style={{backgroundImage: `url('${spacePerson}')`}}>
                        <div className="P-trip-absolute-circle P-trip-circle-one"/>
                        <div className="P-trip-absolute-circle P-trip-circle-two"/>
                    </div>
                </div>
                <div className="P-trip-child">
                    <h2 className='P-trip-title'>Welcome to Space</h2>
                    <p className="P-trip-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className='P-trip-btn'>
                        <button><NavLink to='/'>Back</NavLink></button>
                    </div>

                </div>
            </div>

            <div className="P-trip-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae consequuntur corporis dolor
                    doloremque et eveniet exercitationem explicabo fugit, harum illo iste modi mollitia obcaecati odio
                    omnis optio, quam quibusdam quidem repellat repellendus totam unde veniam veritatis voluptas!
                    Blanditiis distinctio fugit hic iusto laudantium optio perspiciatis quod ratione recusandae rerum.
                    Consectetur cupiditate facere laborum odit quae. Aliquam aut cumque ducimus eligendi ex explicabo
                    facere molestiae molestias, odit voluptate? Aut autem doloribus ducimus, eum eveniet illo inventore
                    ipsa labore nam quas quis recusandae sit tempora, temporibus ullam velit voluptatem. A accusantium
                    alias doloremque ea earum eligendi eum ipsa neque nesciunt omnis quaerat quisquam quo, tempore!
                    Aspernatur assumenda atque blanditiis corporis culpa deleniti doloremque dolores eaque enim facilis
                    fugit hic illum magnam, neque non nulla pariatur quibusdam quidem quo, reprehenderit sint velit,
                    veniam? A ad adipisci aliquam aliquid aperiam architecto blanditiis cum cupiditate debitis dicta
                    dignissimos dolorum earum eligendi eveniet excepturi fugit itaque laborum magni maiores nostrum
                    omnis perferendis quia quisquam recusandae saepe, similique, temporibus tenetur voluptate voluptatem
                    voluptatum! Accusamus aperiam aspernatur debitis dignissimos, dolor earum eligendi ex facere fugit
                    in, labore laboriosam maxime modi mollitia nihil nulla obcaecati placeat quasi quisquam reiciendis,
                    repudiandae soluta tempore totam velit voluptate! Dolorum, id natus!
                </p>
            </div>
        </div>

    );
};

export default MyComponent;
