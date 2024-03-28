CREATE OR REPLACE FUNCTION delete_user()
RETURNS void AS $$
BEGIN
  -- Delete user's gratitudes
  DELETE FROM gratitudes WHERE user_id = auth.uid();

  -- Delete user's profile
  DELETE FROM profiles WHERE user_id = auth.uid();

  -- Delete user from auth.users
  DELETE FROM auth.users WHERE id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;