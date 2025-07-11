import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPost.css';
import AnimatedSection from './AnimatedSection';
import blog1 from '../assets/blogs/blog1.jpg'
import blog2 from  '../assets/blogs/blog2.jpg'

const BlogPost = () => {
  const { slug } = useParams();

  const blogContent = {
    'floating-pawn-movement': {
      title: 'How to Manage Remote Project Teams Effectively',
      date: 'June 15, 2024',
      author: 'Nitin Nishad',
      readTime: '10 min read',
      tags: ['Unreal Engine', 'GameDev', 'C++'],
      heroImage: blog1,
      content: `
        <h2>🧭 What is FloatingPawnMovement?</h2>
        <p>UFloatingPawnMovement is a lightweight movement component provided by Unreal Engine that allows basic movement of Pawns in 3D space. Unlike CharacterMovementComponent, it doesn't rely on a capsule or gravity by default, making it ideal for:</p>
        <ul>
          <li>Drones</li>
          <li>Spaceships</li>
          <li>Hover vehicles</li>
          <li>Zero-gravity entities</li>
        </ul>
        <p>It supports movement input (AddMovementInput), simulates acceleration/deceleration, and integrates cleanly with both Blueprints and C++.</p>
        
        <h3>🧱 Setting It Up</h3>
        <p>Whether you're working in Blueprints or C++, adding FloatingPawnMovement is straightforward.</p>
        <h4>🔧 Blueprint Setup:</h4>
        <ul>
        <li>Create a new Pawn blueprint (not Character).</li>
        <li>Add a FloatingPawnMovement component.</li>
        <li>Add input bindings like "MoveForward", "MoveRight", and "MoveUp".</li>
        <li>Use AddMovementInput(GetActorForwardVector(), AxisValue) to move.</li>
        </ul>
        <h4>🧠 C++ Setup:</h4>

        <ul>
          <pre><code>AFlyingPawn::AFlyingPawn()
{
    RootComponent = CreateDefaultSubobject<USceneComponent>(TEXT("RootComponent"));

    MeshComponent = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Mesh"));
    MeshComponent->SetupAttachment(RootComponent);

    FloatingMovement = CreateDefaultSubobject<UFloatingPawnMovement>(TEXT("FloatingPawnMovement"));
}

void AFlyingPawn::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
    PlayerInputComponent->BindAxis("MoveForward", this, &AFlyingPawn::MoveForward);
    PlayerInputComponent->BindAxis("MoveRight", this, &AFlyingPawn::MoveRight);
    PlayerInputComponent->BindAxis("Ascend", this, &AFlyingPawn::MoveUp);
}

void AFlyingPawn::MoveForward(float Value)
{
    AddMovementInput(GetActorForwardVector(), Value);
}

void AFlyingPawn::MoveRight(float Value)
{
    AddMovementInput(GetActorRightVector(), Value);
}

void AFlyingPawn::MoveUp(float Value)
{
    AddMovementInput(GetActorUpVector(), Value);
}</code></pre>
        </ul>
        
        <h3>🚁 Real-World Use Case: Dronewood</h3>
        <p>In Dronewood, I built a fully functional drone simulation where the player controls a drone through tight obstacle-filled environments using:</p>
        <ul>
        <li>Ascend/descend</li>
        <li>Tilt forward/backward</li>
        <li>Rotate (yaw) left/right</li>
        <li>Speed boost for time trials</li>
        </ul>

        <h3>Why FloatingPawnMovement?</h3>
        <p>While physics-based movement can feel sluggish and unpredictable for this kind of gameplay, FloatingPawnMovement offered:</p>

        <h3>Dronewood's Drone Control Breakdown:</h3>
        <ul>
        <li>Ascend/Descend: AddMovementInput(GetActorUpVector(), Value)</li>
<li>Forward Movement: AddMovementInput(GetActorForwardVector(), Value)</li>
<li>Speed Boost: Modified MaxSpeed dynamically</li>
<li>Tilt Control: Adjusted the mesh's relative rotation for visual realism</li>
</ul>
<ul>
<pre><code>// Speed boost toggle
FloatingMovement->MaxSpeed = bBoosting ? 1600.f : 800.f;</code></pre>
</ul>
<p>I also added a custom camera controller and collision handling logic to avoid unintended flips or drift when bouncing off obstacles.</p>

<h3>🧠 When Not to Use It?</h3>
<p>If you need full physics simulation (e.g. quadcopter thrust physics)
If you want full character animation support
If you need complex floor detection, jumping, or crouching (use CharacterMovementComponent instead)</p>

<h3>🧰 Pro Tips</h3>
<p>Combine with SpringArm + Camera for 3rd-person view.
Clamp pitch/roll to avoid disorienting the player.
Customize Acceleration, Deceleration, and MaxSpeed for arcade or sim feel.
Use OnComponentHit events for obstacle reaction or bounce-back effects.</p>

<h3>📦 Final Thoughts</h3>
<p>FloatingPawnMovement might not be as flashy as CharacterMovementComponent, but it's one of Unreal's most underappreciated tools for flying mechanics. Whether you're building a drone game like Dronewood, a sci-fi spaceship, or a magic carpet — this component gives you speed, control, and simplicity.

If you're exploring flying movement in Unreal and want tips on tilt mechanics, multiplayer sync, or custom input systems — I’d love to connect. Happy flying!</p>
      `
    },
    
    'advanced-css-techniques': {
      title: 'Best Project Management Tools',
      date: 'May 28, 2025',
      author: 'Tushar Kaw',
      readTime: '5 min read',
      tags: ['Jira', 'Productivity'],
      heroImage: blog2,
      content: `
        <p>Discover the best project management tools to streamline workflows, improve collaboration, and boost productivity.</p>
            <h3>Evergreen Management Tools</h3>
        <ul>
        <p>1. Jira (Best for Agile teams) -
        <ul>
        <li>Features: Scrum/Kanban boards, backlog management.</li>
        <li>Best for: Software development.</li>
          </ul>
          </p>
          <p>2. Trello (Simple & Visual) -
        <ul>
        <li>Features: Card-based task management.</li>
        <li>Best for: Small teams & personal projects.</li>
          </ul>
          </p>
          <p>3. Microsoft Project (Advanced Planning) -
        <ul>
        <li>Features: Gantt charts, resource management.</li>
        <li>Best for: Large enterprises.</li>
          </ul>
          </p>
          <p>4. Asana (Task & Workflow Management) -
        <ul>
        <li>Features: Timeline view, automation.</li>
        <li>Best for: Marketing & operations.</li>
          </ul>
          </p>
          <p>5. Monday.com (Customizable Workflows) -
        <ul>
        <li>Features: Gantt charts, resource management.</li>
        <li>Best for: Remote teams.</li>
          </ul>
          </p>

        <h3>Conclusion</h3>
          <p>Pick a tool based on your team size, methodology, and budget.</p>
      `
    }
  };

  // Get the blog post data or show 404
  const post = blogContent[slug];
  
  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <div className="blog-post-404">
            <h1>Blog Post Not Found</h1>
            <p>Sorry, the blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="back-to-blogs">
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="container">
        <AnimatedSection>
          <motion.div 
            className="blog-post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Blog Header */}
            <div className="blog-post-header">
              <Link to="/blogs" className="back-to-blogs">
                <i className="fas fa-arrow-left"></i> Back to Blogs
              </Link>
              
              <div className="blog-post-meta">
                <div className="blog-post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-post-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="blog-post-info">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-separator">•</span>
                  <span className="blog-post-author">{post.author}</span>
                  <span className="blog-post-separator">•</span>
                  <span className="blog-post-read-time">{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="blog-post-title">{post.title}</h1>
            </div>

            {/* Hero Image */}
            <div className="blog-post-hero">
              <img src={post.heroImage} alt={post.title} />
            </div>

            {/* Blog Content */}
            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Blog Footer */}
            <div className="blog-post-footer">
              <div className="blog-post-share">
                <h4>Share this article</h4>
                <div className="share-buttons">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
              
              <Link to="/blogs" className="back-to-blogs-footer">
                ← Back to All Blogs
              </Link>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPost;