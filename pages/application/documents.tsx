import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../utils/supabaseClient';

export default function UploadDocuments() {
  const router = useRouter();
  const [fileID, setFileID] = useState<File | null>(null);
  const [fileBill, setFileBill] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!fileID || !fileBill) {
      alert('Please upload both documents.');
      return;
    }

    setUploading(true);
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) {
      alert('You must be logged in.');
      return;
    }

    const uploads = [
      { file: fileID, path: `id-${user.id}-${Date.now()}` },
      { file: fileBill, path: `bill-${user.id}-${Date.now()}` }
    ];

    for (const upload of uploads) {
      const { error } = await supabase.storage.from('documents').upload(upload.path, upload.file);
      if (error) {
        alert('Error uploading ' + upload.file.name + ': ' + error.message);
        setUploading(false);
        return;
      }
    }

    setUploading(false);
    router.push('/application/review');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Upload Required Documents</h1>
      <label>
        Upload Government-Issued ID:
        <input type="file" onChange={(e) => setFileID(e.target.files?.[0] || null)} />
      </label>
      <br />
      <label>
        Upload Utility Bill:
        <input type="file" onChange={(e) => setFileBill(e.target.files?.[0] || null)} />
      </label>
      <br />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload & Continue'}
      </button>
    </main>
  );
}