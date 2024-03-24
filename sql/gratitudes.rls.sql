-- Enable Row Level Security on the gratitudes table
ALTER TABLE gratitudes ENABLE ROW LEVEL SECURITY;

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
