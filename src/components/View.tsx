import React from 'react';
import { AppBar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Link, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@material-ui/core';
import banner from '../images/banner.jpg'
import me from '../images/me.jpg'
import { Variant } from '@material-ui/core/styles/createTypography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginTop: "16px",
      marginBottom: "16px",
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    contents: {
        maxWidth: 800,
        margin: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",
    },
    card: {
        // maxWidth: 345,
    },
    subtitle: {
        marginTop: "16px",
        marginBottom: "16px",
    },
  }));

export function View() {
    const classes = useStyles();

    return (
        <div>
            <header>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="body1">😀안녕하세요, 박정현입니다!👋</Typography>
                    </Toolbar>
                </AppBar>
            </header>
            <main>
                <Toolbar/>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={banner}
                    title="Contemplative Reptile"
                />
                
                <Container maxWidth="md">
                    <CardMedia
                        component="img"
                        image={process.env.PUBLIC_URL + '/logo.png'}
                        style={{
                            position: "relative",
                            top: "-40px",
                            maxWidth: "80px",
                            marginBottom: "-20px"
                    }}/>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            {Subtitle('안녕하세요, 박정현입니다! 👋', 'h4')}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={me}
                                title="Contemplative Reptile"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            {TypoLink("📧 Email", "chinjja@gmail.com", true)}
                            {TypoLink("🐱 GitHub", "https://github.com/chinjja")}
                            {TypoLink("📚 BOJ", "https://www.acmicpc.net/user/chinjja")}
                            {TypoLink("🍀 Naver Blog", "http://www.naver.com")}
                            {TypoLink("📷 Instagram", "http://www.naver.com")}
                        </Grid>

                        <Grid item xs={12}>
                            {Description("Mobile App Developer", [
                                "꼼꼼한 개발자",
                                "빈 틈을 채워나가는 개발자",
                                "사람들이 필요로 하는 것이 무엇인지 고민하는 개발자",
                            ])}
                        </Grid>

                        <Grid item xs={12}>
                            {Subtitle('🏆 Awards')}
                            {Awards()}
                        </Grid>
                        
                        <Grid item xs={12}>
                            {Subtitle('🛠️ Stacks')}
                            {Stacks()}
                        </Grid>
                        
                        <Grid item xs={12}>
                            {Subtitle('🎒 Activities')}
                            {Activities()}
                        </Grid>
                    </Grid>
                </Container>

            </main>
            <footer>
                <Link href="https://icons8.com">https://icons8.com</Link>
            </footer>
        </div>
    )
}

function Subtitle(title: string, variant: Variant = "h5") {
    const classes = useStyles();
    return <Typography className={classes.subtitle} variant={variant}>{title}</Typography>
}

function TypoLink(label: string, url: string, disable_href: boolean | undefined = undefined) {
    return (
        <div style={{
            marginBottom: "16px",
        }}>
            <Typography display="block" align="left">{label}</Typography>
            <Link href={disable_href?undefined:url} display="block" align="left">{url}</Link>
        </div>
    )
}

function Awards() {
    return (
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>A</TableCell>
                        <TableCell>B</TableCell>
                        <TableCell>C</TableCell>
                        <TableCell>D</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>4</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

function Stacks() {
    return (
        <>
        {Description("Java", [
            "Java를 사용해여 Android 앱을 개발해 본 경험이 있습니다.",
            "객체지향 프로그래밍에 대해 이해하고 있습니다.",
            "Java에서 제공하는 클래스와 메소드를 적절하게 사용할 수 있습니다.",
        ])}
        {Description("Git", [
            "Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다.",
            "GitHub, Gitlab 등을 사용하여 프로젝트 관리 경험이 있습니다.",
        ])}
        </>
    )
}

function Description(title: string, description: string[]) {
    let desc = description.map((d, i) => 
    <Typography key={i} variant="body1" align="left" color="textSecondary">{d}</Typography>
    )

    return (
        <>
        <Typography variant="h6" align="left">{title}</Typography>
        {Spacer("8px")}
        {desc}
        {Spacer("16px")}
        </>
    )
}

function Spacer(space: string) {
    return <div style={{marginBottom: space}}></div>
}

function Activities() {
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
            
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
            
            <Grid item xs={12} sm={6}>
            {Activity()}
            </Grid>
        </Grid>
        </>
    )
}

function Activity() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={banner}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}