-- Enable row level security on the profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can delete their own profile
CREATE POLICY delete_own_profile ON profiles FOR DELETE TO authenticated
USING (auth.uid() = user_id);

-- Policy: Anyone can select from the profiles table
CREATE POLICY select_profiles ON profiles FOR SELECT TO PUBLIC
USING (true);

-- Policy: Users can update their own profile
CREATE POLICY update_own_profile ON profiles FOR UPDATE TO authenticated
USING (auth.uid() = user_id);
