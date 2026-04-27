import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Hourglass, Users, Music } from 'lucide-react';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    { user: 'Rahul', text: 'This looks insane! 🔥' },
    { user: 'Sneha', text: 'Great work team!' }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => {
      const num = parseInt(prev) || 0;
      return liked ? (num - 1).toString() + 'k' : (num + 1).toString() + 'k';
    });
  };

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: 'Aap', text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="glass-card animate-fade" style={{ padding: '24px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ position: 'relative' }}>
            <img src={post.avatar} style={{ width: '40px', height: '40px', borderRadius: '10px' }} alt={post.author} />
            {post.isCollab && (
              <div style={{ position: 'absolute', bottom: -4, right: -4, background: '#6366f1', borderRadius: '4px', padding: '2px' }}>
                <Users size={10} color="white" />
              </div>
            )}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>{post.author}</h4>
              {post.isCollab && <span style={{ fontSize: '10px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>COLLAB</span>}
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>{post.time} • {post.location || 'Global'}</p>
          </div>
        </div>
        <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}>
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: '1.6', color: '#e2e8f0' }}>
        {post.content}
        <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
          {post.moodTags?.map((tag, i) => (
            <span key={i} style={{ fontSize: '11px', color: '#94a3b8' }}>{tag}</span>
          ))}
        </div>
      </div>

      {post.image && (
        <div style={{ marginTop: '16px', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
          <img src={post.image} alt="Post content" style={{ width: '100%', display: 'block' }} />
          {post.type === 'music' && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Music size={32} color="white" />
            </div>
          )}
        </div>
      )}

      {/* Vibe Meter Reactions */}
      <div className="vibe-meter" style={{ marginTop: '16px' }}>
        {post.vibeReactions?.map((vibe, i) => (
          <div key={i} className="vibe-reaction">
            <span>{vibe.emoji}</span>
            <span>{vibe.count}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            onClick={handleLike}
            style={{ background: 'transparent', border: 'none', color: liked ? '#ef4444' : '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          >
            <Heart size={20} fill={liked ? '#ef4444' : 'none'} />
            <span style={{ fontSize: '13px', fontWeight: '500' }}>{likesCount}</span>
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          >
            <MessageCircle size={20} />
            <span style={{ fontSize: '13px', fontWeight: '500' }}>{post.comments}</span>
          </button>
          <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <Share2 size={20} />
          </button>
        </div>
        <button style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}>
          <MoreHorizontal size={20} style={{ transform: 'rotate(90deg)' }} />
        </button>
      </div>

      {/* Time Capsule Post Placeholder */}
      {post.isTimeCapsule && (
        <div className="time-capsule" style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Hourglass size={20} color="#38bdf8" />
            </div>
            <div>
              <p style={{ fontSize: '12px', margin: 0, color: '#f8fafc' }}>Naya time hidden post — 2 din mein unlock hoga</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: '#f8fafc' }}>47:15</p>
            <p style={{ fontSize: '10px', margin: 0, color: '#94a3b8' }}>ghante baaki</p>
          </div>
        </div>
      )}

      {post.coCreateInvite && (
        <div style={{ marginTop: '16px', padding: '12px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Users size={18} color="#818cf8" />
          <p style={{ fontSize: '12px', margin: 0, color: '#e2e8f0' }}>
            <strong>Co-Create</strong>: Arjun chahta hai aap isse next post pe collab karein!
          </p>
        </div>
      )}
      {/* Comments Section */}
      {showComments && (
        <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {comments.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '13px' }}>
                <span style={{ fontWeight: '600' }}>{c.user}</span>
                <span style={{ color: '#cbd5e1' }}>{c.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="Comment karein..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addComment()}
              style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 12px', color: 'white', outline: 'none', fontSize: '13px' }}
            />
            <button onClick={addComment} style={{ background: 'transparent', border: 'none', color: '#6366f1', fontWeight: '600', cursor: 'pointer' }}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
