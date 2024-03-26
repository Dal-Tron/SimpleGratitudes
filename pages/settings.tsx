import { ChangeEvent, useState } from 'react';

import { SpinLoading } from '@/components/base/Loading/SpinLoading';
import { Modal } from '@/components/base/Modal/Modal';
import { SettingsContent } from '@/components/feature/SettingsContent/SettingsContent';
import { UsernameNotice } from '@/components/feature/UsernameNotice/UsernameNotice';
import { validUsername } from '@/helpers/validation';
import NoSSR from '@/hoc/NoSSR';
import { ProfileService } from '@/services/profile';
import { useStore } from '@/store/store';
import { createClient } from '@/utils/supabase/server-props';
import { notification } from 'antd';
import { GetServerSidePropsContext } from 'next';

const SettingsPage = ({ user }) => {
  const profile = useStore((state) => state.profile);
  const { setProfile } = useStore((state) => ({
    setProfile: state.setProfile,
  }));

  const [username, setUsername] = useState(profile?.username || '');
  const [showConfirmUsername, setShowConfirmUsername] = useState(false);
  const [usernameIsDirty, setUsernameIsDirty] = useState(false);
  const [loading, _setLoading] = useState(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!usernameIsDirty) setUsernameIsDirty(true);

    setUsername(value);
  };

  const handleCloseUsernameConfirm = () => {
    setShowConfirmUsername(false);
  };

  const handleOpenUsernameConfirm = () => {
    if (!profile?.updated_username) {
      setShowConfirmUsername(true);
    }
  };

  const handleError = (err) => {
    notification.open({
      type: 'error',
      message: err.message ? err.message : 'Error deleting account.',
      duration: 2,
    });
  };

  const handleSubmitUsername = async () => {
    if (user.id && validUsername(username) && !profile?.updated_username) {
      try {
        const { error } = await ProfileService.updateProfileUsername(
          user.id,
          username,
        );

        if (error) throw error;

        notification.open({
          type: 'success',
          message: 'Successfully updated username!',
          duration: 2,
        });

        if (profile) {
          setProfile({
            ...profile,
            username: username,
            updated_username: true,
          });
        }
      } catch (err) {
        if (err.message?.indexOf('duplicate') >= 0) {
          return handleError(new Error('Username is unavailable'));
        }

        return handleError(new Error('Unable to update username'));
      } finally {
        setShowConfirmUsername(false);
      }
    }
  };

  return (
    <NoSSR>
      {loading ? (
        <SpinLoading />
      ) : (
        <SettingsContent
          handleOpenUsernameConfirm={handleOpenUsernameConfirm}
          handleUsernameChange={handleUsernameChange}
          username={username}
          usernameIsDirty={usernameIsDirty}
        />
      )}
      <Modal
        onClose={handleCloseUsernameConfirm}
        className="bg-primary-0 sg-box-shadow w-132 py-8"
        isOpen={showConfirmUsername}
      >
        <UsernameNotice username={username} onSubmit={handleSubmitUsername} />
      </Modal>
    </NoSSR>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient(context);

  const { data, error } = await client.auth.getUser();

  if (error || !data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: data.user,
    },
  };
}

export default SettingsPage;
