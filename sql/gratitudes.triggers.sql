-- Adjust the 'profile_id' column in the 'gratitudes' table to allow null values
ALTER TABLE gratitudes
ALTER COLUMN profile_id DROP NOT NULL;

-- Create a trigger function to update 'profile_id' in 'gratitudes' table
CREATE OR REPLACE FUNCTION update_gratitude_profile_id()
RETURNS TRIGGER AS $$
BEGIN
    -- Find the 'profile_id' based on the 'user_id' in the newly inserted row
    SELECT id INTO NEW.profile_id
    FROM profiles
    WHERE user_id = NEW.user_id;

    -- Return the updated row
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists to avoid errors
DROP TRIGGER IF EXISTS set_profile_id ON gratitudes;

-- Create a 'BEFORE INSERT' trigger on the 'gratitudes' table
CREATE TRIGGER set_profile_id
BEFORE INSERT ON gratitudes
FOR EACH ROW
EXECUTE FUNCTION update_gratitude_profile_id();
