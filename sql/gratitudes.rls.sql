-- Enable Row Level Security on the gratitudes table
ALTER TABLE gratitudes ENABLE ROW LEVEL SECURITY;

-- Drop policies if they already exist
DROP POLICY IF EXISTS insert_gratitudes ON gratitudes;
DROP POLICY IF EXISTS select_public_gratitudes ON gratitudes;
DROP POLICY IF EXISTS select_private_gratitudes ON gratitudes;
DROP POLICY IF EXISTS delete_all_gratitudes ON gratitudes;

-- Policy: Only authenticated users can insert
CREATE POLICY insert_gratitudes ON gratitudes
    FOR INSERT
    WITH CHECK (auth.uid() IS NOT NULL);

-- Policy: Anyone can see public gratitudes
CREATE POLICY select_public_gratitudes ON gratitudes
    FOR SELECT
    USING (public = true);

-- Policy: Authenticated users can see their own private gratitudes
CREATE POLICY select_private_gratitudes ON gratitudes
    FOR SELECT
    USING (auth.uid() = user_id AND public = false);

-- Policy: Service role can delete all gratitudes
CREATE POLICY delete_all_gratitudes ON gratitudes
FOR DELETE TO service_role;
