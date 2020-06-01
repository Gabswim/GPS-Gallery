import React from 'react';
import svgStravaButton from './btn_strava_connectwith_orange.svg';

export type Permissions =
  | 'read'
  | 'read_all'
  | 'profile:write'
  | 'activity:read'
  | 'activity:read_all'
  | 'activity:write';

export type ApprovalPrompt = 'force' | 'auto';

export interface StravaParams {
  client_id: number;
  redirect_uri: string;
  response_type: string;
  approval_prompt: ApprovalPrompt;
  permissions: Permissions[];
}

interface StravaAuthButtonProps {
  params: StravaParams;
}

const StravaAuthButton: React.FC<StravaAuthButtonProps> = ({ params }) => {
  console.log(process.env.REACT_APP_STRAVA_APP_CLIENT_ID);
  const clientId = '';
  return (
    <a
      href={`https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost&approval_prompt=force`}
    >
      <img src={svgStravaButton} alt="connect with strava" />{' '}
    </a>
  );
};

export default StravaAuthButton;
