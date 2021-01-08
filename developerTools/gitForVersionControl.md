# Git for Version Control
#### TOPICS
- Version Control
- Installing Git
- Common Git Commands
- Practice

## Version Control
You’re on your computer plugging away at a research project, and it’s all going well. You make some changes and hit “Save.” Then you realize: Those last changes you made? They were all wrong. You need to undo them, but you can’t. The previous version is already gone for good.

You might already have a system in place for avoiding such a mishap — maybe you save your document multiple times under different names so you can return to a previous stage of the project. Smart!

Developers call this process version control.

### Getting on Board With Git
Software developers have created a number of tools to solve this version control problem for their own projects: Subversion, CVS, Perforce, and many others.

In fact, some companies, like Google, have developed their own special kinds of version control.

In this course, we’ll focus on one particularly popular program that's accessed via the Command Line Interface called Git.

Git offers a variety of advantages to its users, including:

- Rolling back changes.
- Rolling forward changes.
- Mitigating competing versions of the same file.
- Tracking changes for multiple files.
- Recording only the changes made rather than saving entire separate versions of each file.
- And many more...

### Installing Git
If you don’t already have Git, you can install it by following directions provided on git-scm.com.

First, you'll install a tool called Homebrew if you haven't already. Then, Homebrew will help you install Git. All of this will take place in your terminal window.
If you’re following along on Windows and installed Git Bash, Git should have been installed along with it, so you’re all set.

You can check to see if this installation worked by opening up the terminal window and typing:

 ```git --version```

This will show you what version of Git is running. Your computer should return something greater than or equal to 2.10.1.

### The Project at Hand
You were just hired to manage all of the blog content for a media company called Gorilla Army.

To start, create a directory on your desktop called GA-Blog.

To take advantage of Git superpowers, we have to add a hidden directory called .git/ to our project directory, which contains all of the data Git needs to operate. This is called “initializing.”
Next, navigate to the GA-Blog directory you just created and run this command:

```$ git init```

### Can’t Find It?
If you navigate to your GA-Blog directory in the GUI, you won’t see any additional files. This is because hidden files aren’t visible on your computer by default. To see the `.git/` directory, you need to run `ls -a` from the command line.

### Status Update
Because you just started at Gorilla Army, your GA-Blog directory is empty. We can confirm this by running git status, which asks Git to give us an update on our project’s status.

```$ git status```

Each save we make to our repository is called a commit; this message is telling us that our project has no unsaved changes.

### Make a File
To create a new text file called you'll use the touch command:

````$ touch my-first-post.txt````

Then, check the status again. Git has identified that a change has been made: There is now a file in your repository.

### Staging
Like the terminal, Git doesn’t make any assumptions about what changes you want to save and when you want to save them. Instead, you need to explicitly tell it what to do.
To add this change to your next commit, you'll use the git add command.

````$ git add my-first-post.txt````

The command is add, but we describe the operation by saying that the file has been “staged.” In other words, it has been added to the list of changes that will be officially saved with our next commit.

The files on this list aren’t final, and any of these changes can be removed, or “unstaged.”

### Status Update
If we run `git status` again, we’ll see that the addition of post.txt is staged and ready to be committed.

##3 For Efficiency’s Sake

Sometimes, you’ll want to save all of the changes to files that have been made inside your repository.

Instead of specifying each file, you can write `git add` ., which will add all of the files in the working directory to the next commit.

Proceed with caution when using `git add` ., as you could accidentally add files with sensitive information.

### It’s Not Saved Yet!
Once we’re ready to officially record this version of our project, type:

````$ git commit -m "created a new post.txt file"````

The -m option allows you to include a message that describes the changes you made for your collaborators or future you.

These should be short but descriptive and clearly indicate what changes each commit makes to the project.

Note: In some versions of Git CLI, you will be asked to provide configuration details before committing. Here is a link to additional Git configuration directions. [LINK](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration)

### Let’s Run That Back
Git allows you to add changes to your project in the local repository with two steps:
````
$ git add <your-file-name>
$ git commit -m "message"
`````

This might be a strange concept to non-developers who are used to clicking a save icon and moving on. For developers, a two-step save process provides benefits, such as making incremental edits to a challenging build and reviewing each file before committing it.

If you’re curious, you can read more about how developers use the two-step saving process to their advantage [here](https://softwareengineering.stackexchange.com/questions/69178/what-is-the-benefit-of-gits-two-stage-commit-process-staging).

### Commit History
Further into a project, after you’ve made many commits, you might want to look back and see a timeline of those changes.

Git allows developers to view a list of commits, the submission date, the author, the commit message, and a unique number that identifies the commit, called an <b>SHA</b>.

### The Commit History Command
To view the timeline of changes, you can run:
````
$ git log
````

This will yield a list of entries that looks like this:
````
commit 6d33f525a09b9918f75188db164ea2722039830b
Author: Sarah <sarah@gmail.com>
Date: Wed Jan 28 17:44:03 2015 -0500
added a new post
````
### Putting It All Together: Prep
- Open your terminal and navigate to the directory you’ve been using to store information about this course. If you don’t have one yet, make one.
- Create a directory inside of that called `git-practice`.
- Navigate into that new directory. You can make sure you’re in the right place using the `pwd` command.
- Use `git init` to create a Git repository in the git-practice directory.

<b>Note:</b> Before running `git init`, make sure you’re not already inside another Git repository. Type `git status`. If you see `fatal: Not a git repository (or any of the parent directories): .git`, then you know you’re good to go and you can safely run `git init` within this folder.

### Putting It All Together: Add and Commit
- Run the `ls -a` command to see the `.git` directory you’ve just created.
- Create a new file called `README.txt` and run `git status`. What output do you get?
- Use the `git add README.txt` command to add the new file to the staging area.
- Run `git status` again. How has the output changed?
- Now, commit the changes you made using `git commit -m "..."`. Give the commit an appropriate message. Remember, it should be short but descriptive.
You did it! In due time you’ll be able to complete this process with your eyes closed (although we don’t recommend it).

#### LINKS
- [Version Control: Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git Basics](https://git-scm.com/book/en/v2)