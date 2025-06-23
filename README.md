# I Fucking Hate Scrum

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-orange?logo=buy-me-a-coffee)](https://buymeacoffee.com/shubham.tech)

A cathartic website for developers to share their honest feelings about Scrum methodology. Inspired by the frustrations of countless developers who've endured endless ceremonies, meaningless metrics, and the bureaucratic overhead of "agile" development.

![image](https://github.com/user-attachments/assets/30b32582-c688-4c30-bcf9-1f52ff98fc5a)

## About

This site is a collection of real opinions from real developers about Scrum - a methodology that promised to make software development more efficient but often ends up being a source of frustration, micromanagement, and wasted time.

## Features

- **Random Opinion Generator**: Click the robot or press spacebar to see a new developer opinion
- **25+ Real Community Quotes**: Authentic frustrations from Reddit, HackerNews, Stack Overflow, and developer forums
- **Community-Sourced Content**: Real quotes from developers who've experienced Scrum in the wild
- **Responsive Design**: Works on all devices
- **Keyboard Navigation**: Use spacebar or Enter to navigate
- **Touch Support**: Swipe on mobile devices

## Content Sources

All opinions are real quotes from the developer community, sourced from:
- Reddit discussions on r/programming, r/ExperiencedDevs, r/cscareerquestions
- Hacker News comment threads
- Stack Overflow discussions
- Developer forums and blogs
- Anonymous developer testimonials

The content represents genuine frustrations and experiences shared by developers across the industry. Also, a shoutout to [rayfrankenstein](https://github.com/rayfrankenstein) for providing the [list of quotes](https://github.com/rayfrankenstein/AITOW).

## Why This Exists

Scrum has become so ubiquitous in software development that questioning it has become taboo. This site gives developers a place to:

- Validate their frustrations with Scrum ceremonies
- Share experiences with story points, velocity, and other metrics
- Connect with others who've experienced similar issues
- Laugh (or cry) about the absurdities of modern "agile" development

## Common Complaints Featured

- **Excessive Meetings**: Daily standups, sprint planning, retrospectives, reviews
- **Meaningless Metrics**: Story points, velocity, burndown charts
- **Micromanagement**: Disguised as "transparency" and "collaboration"
- **Interruption Culture**: Constant check-ins disrupting deep work
- **Cargo Cult Agile**: Following rituals without understanding principles
- **Technical Debt**: Accumulated due to sprint pressure and short-term thinking

## Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (modular architecture)
- **Styling**: Modern CSS with Inter font
- **Architecture**: 
  - `js/config.js` - Application configuration
  - `js/utils.js` - Utility functions and helpers
  - `js/opinions-data.js` - Community-sourced opinion data
  - `js/app.js` - Main application logic
- **Responsive**: Mobile-first design
- **Accessibility**: Keyboard navigation and screen reader friendly

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. That's it! No build process required.

## Contributing

Have a Scrum horror story? Know a great quote about the absurdities of agile ceremonies? Contributions are welcome! 

### Adding New Opinions

Edit the `js/opinions-data.js` file and add to the `scrumOpinions` array:

```javascript
{
    quote: "Your main quote about Scrum frustrations",
    author: "Attribution (can be anonymous)",
    role: "Job title or description", 
    highlight: "A SHORT, PUNCHY STATEMENT IN CAPS"
}
```

### Modifying App Behavior

The application is now modular and configurable:

- **Configuration**: Edit `js/config.js` for app settings
- **Utilities**: Add shared functions to `js/utils.js`
- **App Logic**: Modify `js/app.js` for behavior changes
- **Data**: Update `js/opinions-data.js` for content changes

## Disclaimer

This site is intended as humor and catharsis for the developer community. It's not meant to dismiss the value of collaboration, planning, or project management - just the specific frustrations many developers experience with Scrum implementation.

If Scrum works for your team, that's great! This site is for those who've experienced the darker side of cargo cult agile.

## Inspiration

- The broader developer community's experiences with Scrum
- "I Fucking Hate Jira" - for the format and approach
- Countless Reddit threads, blog posts, and conference hallway conversations
- The gap between Agile Manifesto ideals and Scrum reality

## License

MIT License - Feel free to fork, modify, and share your own version.

## Author

**Shubham Sharma**
- GitHub: [@Sharma-IT](https://github.com/Sharma-IT)
- Email: shubhamsharma.emails@gmail.com

---

*"Real opinions from real developers about an 'agile' methodology which unfortunately is also real."*
