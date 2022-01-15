import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			<div>
				<img className={s.img}
					src="https://wallpaperaccess.com/full/25682.jpg"
				/>
			</div>
			<div className={s.descriptionBlock}>
                ava + description
            </div>
		</div>
	);
};

export default ProfileInfo;
