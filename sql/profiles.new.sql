CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    randomUsername TEXT;
    usernameExists BOOLEAN;
BEGIN
    LOOP
        -- Generate a random 15-digit number and prepend it with 'user_'
        randomUsername := 'user_' || LPAD(FLOOR(RANDOM() * 999999999999999)::TEXT, 15, '0');

        -- Check if the generated username already exists
        SELECT EXISTS(SELECT 1 FROM public.profiles WHERE username = randomUsername) INTO usernameExists;

        -- If the username does not exist, exit the loop
        IF NOT usernameExists THEN
            EXIT;
        END IF;
    END LOOP;

    -- Insert a new row into the profiles table with the user_id and unique username
    INSERT INTO public.profiles (user_id, username)
    VALUES (NEW.id, randomUsername);

    -- Return the new user
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
